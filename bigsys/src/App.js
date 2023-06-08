import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Game } from "./Home/Game";
import { Play } from "./Home/Play";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/play/:id" element={<Play />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
