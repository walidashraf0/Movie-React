import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  // Get All Movies
  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a1741ea6afc5c3f3e0ec4981ac49a894`
    );
    setMovies(res.data.results);
  };

  useEffect(() => {
    getAllMovies();
    console.log(movies);
  }, []);

  return (
    <>
      <div className="font color-body">
        <NavBar />
        <Container>
          <MovieList />
        </Container>
      </div>
    </>
  );
}

export default App;
