/**
 * The main application component that defines the routing structure for the app.
 * 
 * This component uses `react-router-dom` to define routes for different pages:
 * - `/` renders the `Home` component.
 * - `/dashboard` renders the `Dashboard` component.
 * - `/participant` renders the `Participant` component.
 * - Any other path (`*`) renders the `NotFound` component.
 * 
 * @component
 * @returns {JSX.Element} The rendered application with defined routes.
 */

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
