import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
        const { id } = useParams();
        const [movieDetails, setMovieDetails] = useState({})
        const [ isLoading, setIsLoading ] = useState(true)

        useEffect(() => {
            console.log('make an api request', id)
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6312947974d52162ac5858e3fc68263&language=en-US`)
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setMovieDetails(data)
                    setIsLoading(false)
                }, 2000)
        })
        }, [id])

        function renderMovieDetails() {
            if(isLoading) {
                return <Hero text='Loading...' />
            }
            if(movieDetails) {
                const posterPath = `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`
                const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
                return(

                    <>
                <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                        </div>
                    </div>
                </div>
                </>
            )
            }
        }
    return renderMovieDetails()
}

export default MovieView;