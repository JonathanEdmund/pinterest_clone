import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PinPage from "./pages/PinPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pin/:pinId" element={<PinPage />} />
        <Route path="*" element={<h1>Feature Not Available</h1>} />
      </Routes>
    </>
  );
}
