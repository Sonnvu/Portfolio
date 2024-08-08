import HomePage from "./component/page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutSection from "./component/section/AboutSection/AboutSection";
import Project from "./component/page/Project/Project";
import Header from "./component/section/HomePage/Header";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Portfolio" element={<HomePage />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
