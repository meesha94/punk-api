import './App.scss';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ExploreBeers from './containers/ExploreBeers/ExploreBeers';
import beers from "./data/beers"
function App() {
  return (
    <div className='app'>
      <div className='navbar'>
    <Navbar className="app__navbar"/>
    <ExploreBeers beersArr={beers}/>
    </div>
    <Main className="app__main"/>
    </div>
  );
}

export default App;
