import { Routes, Route } from "react-router-dom";

//Css
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//Components
import MyNavBar from "./components/Navbar.jsx";
import ListingPage from "./pages/List.jsx";

//Pages
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {

  return (
    <div>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />

      </Routes>
    </div>
  )
}

export default App;
