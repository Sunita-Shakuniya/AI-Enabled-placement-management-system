import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from './pages/Admin'
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Resouses from "./pages/Resouses";
import Recruiters from "./pages/Recruiters";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resouses" element={<Resouses />} />
        <Route path="/recruiters" element={<Recruiters/>} />
      </Routes>
    </Router>
  );
}

export default App
