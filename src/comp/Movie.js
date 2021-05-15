import React from 'react';
import "../index.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const temp = 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1038&q=80';

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className="movie">
            <div className="movie-header">
                <img src={poster_path ? (IMG_API + poster_path) : temp} alt={title} />
            </div>
            <div className="movie-info">
                <h4>{title}</h4>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over">
                <h3>Overview:</h3>
                <hr />
                <p>{overview}</p>
            </div>

        </div>
    );
}

export default Movie;