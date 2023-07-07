import './index.css';
import Nav from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import Highlights from "./components/Highlights.jsx";
import Featured from "./components/Featured.jsx";
import Discounted from './components/Discounted';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  );
}

export default App;
