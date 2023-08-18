
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products_detail from "./pages/products_detail";
import Sidebar from "./components/sidebar";
import Header from "./components/header";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Products_detail />} />
      </Routes>
      <Sidebar/>
    </BrowserRouter>
  );
}

export default App;
