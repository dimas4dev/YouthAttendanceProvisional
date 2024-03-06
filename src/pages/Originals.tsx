import { useEffect, useState } from 'react';
import { MovieCard } from '../components/core/MovieCard';
import { ResponsiveContainer } from '../components/core/Container';

export const Originals = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTgzOWJiMDA5NTE2MTYzNmI1ZmRiMjU0YzlmNGU4NCIsInN1YiI6IjY1ZTg5OTlmY2FhYjZkMDE2Mjk1YTE5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YQcGiFn3wnWGzBD5eRZaHgsQiZJfMDssvzlrzpcFBFs'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results);
            })
            .catch(err => console.error('error:' + err));
    }, []);

    return (
        <ResponsiveContainer>
            {movies.map((movie: { id: number; title: string; release_date: string; overview: string; poster_path: string }) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    overview={movie.overview}
                    posterPath={movie.poster_path}
                    id={movie.id}
                />
            ))}
        </ResponsiveContainer>
    );
};
