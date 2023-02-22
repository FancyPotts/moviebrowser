import Hero from './Hero'
import { Link } from 'react-router-dom'
import { Router } from 'react'

// TMBD API key = d6312947974d52162ac5858e3fc68263
// TMBD example = https://api.themoviedb.org/3/search/company?api_key=d6312947974d52162ac5858e3fc68263&query=Star%20Wars&page=1

// movie poster path = https://image.tmdb.org/t/p/w200/{posterUrl}
// info path = https://api.themoviedb.org/3/movie/{movie_id}?api_key=d6312947974d52162ac5858e3fc68263&language=en-US

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    return (
        <div className='col-lg-4 col-med-3 col-2 my-4'>

            <div className="card">
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={detailUrl} className="btn btn-primary">Show details</Link>
            </div>
            </div>
        </div>
    )
}

const Search = ({ keyword, searchResults }) => {
    const title = `You are searching for ${ keyword }`
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    return (
        <>
            <Hero text={title} />
            {resultsHtml &&
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>} 
        </>
    )

}

export default Search;