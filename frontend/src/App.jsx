import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import Participant from "./pages/participant/participant";
import Home from "./pages/home/home.jsx";
import NotFound from "./pages/notfound/notfound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/participant" element={<Participant />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
