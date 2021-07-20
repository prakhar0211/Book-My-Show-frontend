import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import HomePage from "./pages/home.page";
import Movie from "./pages/Movie.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <DefaultHOC path="/movie/:id" exact component={Movie} />

  </>
  );
}

export default App;
