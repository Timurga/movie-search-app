import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.sass';

const FilmDescription = () => {
    const params = useParams();
    const [film, setFilm] = useState({});

    const filmInfo = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${params.id}`);
        const data = await response.json();
        setFilm(data);
    };

    useEffect(() => {
        filmInfo();
    }, [null])

    return (
        <div className='container film'>
            <img src={film.Poster} alt="Poster" />
            <div className="film__info">
                <h1 className='film__info__title'>{film.Title}</h1>
                <p className='film__info__plot'>{film.Plot}</p>
                <p className='film__info__actors'>Actors: {film.Actors}</p>
                <p className='film__info__directore'>Director: {film.Director}</p>
                <p>Genre: {film.Genre}</p>
                <p>Box Office: {film.BoxOffice}</p>
                <p>Awards: {film.Awards}</p>
                <p>Runtime: {film.Runtime}</p>
                <div className='film__info__score'>
                    <p>Metascore: <span>{film.Metascore}</span></p>
                    <p>IMDb: <span>{film.imdbRating}</span></p>
                </div>
            </div>
        </div>
    );
}

export default FilmDescription;
