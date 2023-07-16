import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative text-text bg-bg z-0">
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
