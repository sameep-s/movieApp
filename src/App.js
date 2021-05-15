import React, { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Movie from './comp/Movie';
import './index.css';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=31234ff7106c552e41d3814035b45aca&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=31234ff7106c552e41d3814035b45aca&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  //hooks used to call the api and fetch results.
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);


  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log('Searched_data ==', data);

        setMovies(data.results);
      });
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);

  };

  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mode === 'dark' ? '#22254b' : '#ffffff'};
  }
  `;

  const [theme, setTheme] = useState({ mode: 'dark' });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <header className='topBar'>
          <form onSubmit={handleOnSubmit} >
            <input
              className='search'
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>

          <button
            className='toggleMode'
            onClick={()=>setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})}>
            {theme.mode === 'light' ? <Brightness3Icon /> : <WbSunnyIcon />}
          </button>

        </header>

        <div className="movie-container">

          {movies.length > 0 && movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
