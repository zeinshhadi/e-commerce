import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Login from "./pages/login";
import Sell from "./pages/sell";
import Register from "./pages/register"
import Dashboard from "./pages/dashboard/index"
import { CartProvider } from "./components/cartContext/index";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sell" element={<Sell />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
