/**
 * ParticipantPage Component
 * 
 * This component displays a list of participants for a specific sport. It fetches
 * the sport data from the backend using the sportId passed via the `useLocation` hook.
 * 
 * Features:
 * - Displays a loading message while fetching data.
 * - Shows an error message if the fetch fails.
 * - Renders a list of participants with their details (name, age, and an image).
 * 
 * Props:
 * - None
 * 
 * State:
 * - sport: Object containing sport details and participants.
 * - loading: Boolean indicating whether data is being fetched.
 * - error: String containing error message if fetch fails.
 * 
 * Dependencies:
 * - React (useState, useEffect)
 * - React Router (useLocation)
 * - Navbar and Footer components
 * - CSS styles from "participant.css"
 * - Image assets from "../../assets/img"
 * 
 * Environment Variables:
 * - VITE_BACKEND_URL: Backend API base URL.
 */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./participant.css";
import img from "../../assets/img";

export default function ParticipantPage() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const location = useLocation();
  const { sportId } = location.state || {};

  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sportId) return;

    fetch(`${backendUrl}/api/sports/${sportId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch sport data");
        return res.json();
      })
      .then((data) => {
        setSport(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [sportId]);

  return (
    <>
      <Navbar />
      <div className="participant-container">
        {loading ? (
          <p>Loading participants...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <>
            <h1 className="sport-title">{sport.name} Participants</h1>
            <p className="sport-description">{sport.description}</p>

            <div className="participant-grid">
              {sport.participants.map((participant) => (
                <div key={participant.id} className="participant-card">
                  <img src={img.img1} alt="" />
                  <h3>{participant.name}</h3>
                  <p>Age: {participant.age}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
