import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage"
import AboutMe from "./AboutMe"
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <nav className='nav'>
        <a href='#' className='nav-item'> Homepage </a>
        <a href='#' className='nav-item'> About Me </a>
      </nav>
      <Homepage />
      <AboutMe />
    </div>
  );
}

export default App;
