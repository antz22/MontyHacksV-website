import './assets/css/App.css';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import FAQ from './components/FAQ.js';
import Schedule from './components/Schedule.js';
import Sponsors from './components/Sponsors.js';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
      <FAQ></FAQ>
      <Schedule></Schedule>
      <Sponsors></Sponsors>
    </div>
  );
}

export default App;
