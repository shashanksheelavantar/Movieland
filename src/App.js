import logo from './logo.svg';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
//api key e6b39ea7

const API_URL = 'http://www.omdbapi.com?apikey=e6b39ea7'

const movie1 = {
  
    "Title": "The Making of 'Working Title'",
    "Year": "1992",
    "imdbID": "tt2288099",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MjI1NzQ0NF5BMl5BanBnXkFtZTcwODg1MDI1Nw@@._V1_SX300.jpg"


}
const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

      setMovies(data.Search);
      }
      useEffect(() =>{
        searchMovies('');
    }, []);

  return (
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
          />
          <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie)=>(
                <MovieCard movie={movie}/>
              ))}
            </div>

          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )}
        
        </div>
    
    
  );
}

export default App;
