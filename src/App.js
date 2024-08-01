import HomePage from "./component/page/HomePage/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutSection from "./component/section/AboutSection/AboutSection";
import Header from "./component/section/HomePage/Header";

function App() {
  return (
      <BrowserRouter>
          <HomePage />
          <Routes>
              <Route path="/home/about" element={<AboutSection />}/>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
