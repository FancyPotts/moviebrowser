// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import MovieView from './components/MovieView';
import { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';


function App() {


const [searchResults, setSearchResults] = useState([]);
const [searchText, setSearchText] = useState('');

useEffect(() => {
  if (searchText){

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6312947974d52162ac5858e3fc68263&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      setSearchResults(data.results)
    })
  }
}, [searchText])


  return (
      <div>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/search">
              <Search keyword={searchText} searchResults={searchResults} />
            </Route>
            <Route path="/movies/:id" component={MovieView} />
        </Switch>
      </div>
  );
}

export default App;
