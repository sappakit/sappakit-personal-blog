import HomePage from "./components/page/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default HomePage();
