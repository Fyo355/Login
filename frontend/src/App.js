import { BrowserRouter, Route, Routes } from "react-router-dom";
import Normal from "./pages/Normal";
import Business from "./pages/Business";
import Admin from "./pages/Admin";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
