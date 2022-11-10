import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from "./pages/ItemPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pin/:itemId" element={<ItemPage />} />
      <Route path="*" element={<h1>Feature Not Available</h1>} />
    </Routes>
  );
}
