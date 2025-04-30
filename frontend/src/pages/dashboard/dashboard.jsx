import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import NavBar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

export default function Dashboard() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://192.168.176.133:8502/api/sports/")
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
