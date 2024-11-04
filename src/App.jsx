import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage";
import ViewPostPage from "./page/ViewPostPage";
import SignUpPage from "./page/SignUpPage";

import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<ViewPostPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
