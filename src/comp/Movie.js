import React from 'react';
import "../index.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

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
