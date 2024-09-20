import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
