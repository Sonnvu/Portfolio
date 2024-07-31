import HomePage from "./component/page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutSection from "./component/section/AboutSection/AboutSection";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/Portfolio" element={<HomePage />}/>
              <Route path="/home/about" element={<AboutSection />}/>
          </Routes>
          <HomePage />
      </BrowserRouter>
  );
}

export default App;
