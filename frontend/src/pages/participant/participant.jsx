import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./participant.css";
import img from "../../assets/img";

export default function ParticipantPage() {
  const location = useLocation();
  const { sportId } = location.state || {};

  const [sport, setSport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sportId) return;

    fetch(`http://192.168.176.133:8502/api/sports/${sportId}`)
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
