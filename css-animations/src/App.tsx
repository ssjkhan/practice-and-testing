import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Basics from "./basics/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="basics/*" element={<Basics />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
