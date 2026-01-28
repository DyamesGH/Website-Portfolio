import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import Projects from "./pages/Projects";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
