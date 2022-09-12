import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import beers from '../src/data/beers'
<source />

function App() {
  return (
    <div className="app">
      <Navbar className="app__navbar" />

      <Main className="app__main"beersArr={beers} />
    </div>
  );
}

export default App;
