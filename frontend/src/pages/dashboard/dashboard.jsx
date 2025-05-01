/**
 * Dashboard Component
 *
 * This component represents the main dashboard page of the application.
 * It fetches and displays a list of sports from the backend API and allows
 * users to navigate to a detailed view of each sport's participants.
 *
 * @component
 * @returns {JSX.Element} The rendered Dashboard component.
 *
 * @example
 * <Dashboard />
 *
 * @description
 * - Fetches sports data from the backend API on component mount.
 * - Displays a loading message while fetching data.
 * - Displays an error message if the fetch request fails.
 * - Renders a list of sports with a button to view details for each sport.
 *
 * @dependencies
 * - `useEffect` and `useState` from React for state management and side effects.
 * - `useNavigate` from react-router-dom for navigation.
 * - `NavBar` and `Footer` components for consistent layout.
 *
 * @state
 * - `sports` (Array): List of sports fetched from the backend.
 * - `loading` (Boolean): Indicates whether the data is being loaded.
 * - `error` (String|null): Stores error messages if the fetch request fails.
 *
 * @functions
 * - `handleViewDetails(id: number)`: Navigates to the participant page with the selected sport's ID.
 *
 * @env
 * - `VITE_BACKEND_URL`: The base URL of the backend API, accessed via environment variables.
 */



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

export default function Dashboard() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backendUrl}/api/sports/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch sports");
        return res.json();
      })
      .then((data) => {
        setSports(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate("/participant", { state: { sportId: id } }); // send ID via props
  };

  return (
    <>
      <NavBar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Sport Dashboard</h1>
        <p>Explore our collection of sports and their participants</p>

        {loading ? (
          <p>Loading sports...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="dashboard-content">
            {sports.map((sport) => (
              <div key={sport.id} className="dashboard-card">
                <h2>{sport.name}</h2>
                <p>{sport.description}</p>
                <button
                  className="details-button"
                  onClick={() => handleViewDetails(sport.id)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
