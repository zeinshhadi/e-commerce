import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Login from "./pages/login";
import Sell from "./pages/sell";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Login" element={<Login />} />
        <Route path="Sell" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
