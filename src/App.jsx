import "./App.scss";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar className="app__navbar" />

      <Main className="app__main" />
    </div>
  );
}

export default App;
