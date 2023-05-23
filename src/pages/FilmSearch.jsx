import { useState, useEffect } from 'react';
import './styles.sass';
import { useNavigate } from 'react-router-dom';

const FilmSearch = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (title) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}?apikey=${import.meta.env.VITE_API_KEY}&s=${title}`);
            const data = await response.json();
            const newResults = data.Search || [];
            setSearchResults(newResults);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const storage = sessionStorage.getItem('film');
        if (storage) {
            handleSearch(storage);
        }
    }, []);

    return (
        <div className='container'>
            <h1>Введите название фильма</h1>
            <div className='search'>
                <input type='text' className='search__input' value={title} onChange={e => setTitle(e.target.value)} placeholder='Введите название'/>
                <button type='submit' className='search__button' onClick={() => { handleSearch(title); sessionStorage.setItem('film', title) }}>Найти</button>
            </div>

            <div className="result">
                {
                    (searchResults.length == 0) ?
                        (sessionStorage.getItem('film') != null) ? <div>Фильм не найден!</div> : <div></div>
                        :
                        searchResults.map((movie, index) => (
                            <div key={`${movie.imdbID}_${index}`} className='result__item'>
                                <img src={movie.Poster} alt="" />
                                <div>
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Type}</p>
                                    <p>{movie.Year}</p>
                                    <button onClick={() => navigate(`/films/${movie.imdbID}`)}>More Details</button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default FilmSearch;
