import HomePage from "./component/page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Project from "./component/page/Project/Project";
import ScrollToTop from "./component/utils/helper/ScrollToTop";
import Sport from "./component/page/SportPage/Sport";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/Portfolio" element={<HomePage />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/sport" element={<Sport />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
