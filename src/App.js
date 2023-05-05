import './App.css';
import Navigation from './Components/Header/Navigation';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import "./Components/Assets/font"
import Project from './Components/Pages/Project';

function App() {
  return (
    <div>
      <Navigation/>
      <Home/>
      <About/>
      <Project/>
    </div>
  );
}

export default App;
