import HomePage from "./component/page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Project from "./component/page/Project/Project";
import ScrollToTop from "./component/utils/helper/ScrollToTop";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/Portfolio" element={<HomePage />} />
                <Route path="/Project" element={<Project />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
