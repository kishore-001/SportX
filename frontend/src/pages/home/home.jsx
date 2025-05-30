/**
 * Home Component
 * 
 * This component represents the Home page of the SportX platform. It includes a navigation bar, 
 * a footer, and multiple sections showcasing the platform's features and a call-to-action for users.
 * 
 * @component
 * @returns {JSX.Element} The rendered Home page component.
 * 
 * Sections:
 * - Welcome Section: Displays a welcome message and a button to navigate to the dashboard.
 * - Features Section: Highlights the platform's features with icons, titles, and descriptions.
 * - Call-to-Action Section: Encourages users to explore the SportX dashboard.
 * 
 * Dependencies:
 * - Navbar: The navigation bar component.
 * - Footer: The footer component.
 * - Link: React Router's Link component for navigation.
 * - icon: An object containing paths to icons used in the Features section.
 * 
 * Styling:
 * - The component uses styles defined in the "home.css" file.
 */



import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./home.css";
import { Link } from "react-router-dom";
import icon  from "../../assets/icons";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* here goes the home page content */}

      <div className="home-container-1">
          <h1>Welcome to SportX</h1>
          <p>Your one-stop platform for exploring sports and their participants from around the world.</p>
          <Link to="/dashboard"><button>Explore SportX</button></Link>
      </div>
      <div className="home-container-2">
          <h1>Features</h1>
          <p>Discover what our platform offers</p>
          <div className="home-container-2-boxes">
            <div className="home-container-2-box">
               <img src={icon.icon1} alt="Browse" />
               <h1>Browse Sports</h1>
               <p>Explore a wide variety of sports from around the world, each with detailed information.</p>
            </div>
            <div className="home-container-2-box">
            <img src={icon.icon2} alt="participants" />
               <h1>View Participants</h1>
               <p>See athletes and participants associated with different sports and their profiles.</p>
            </div>
            <div className="home-container-2-box">
            <img src={icon.icon3} alt="design" />
               <h1>Responsive Design</h1>
               <p>Enjoy a seamless experience on any device, from desktop to mobile.</p>
            </div>
          </div>
      </div>
      <div className="home-container-3">
          <h1>Ready to Explore?</h1>
          <p>Discover the wide world of sports and the amazing athletes who participate in them.</p>
          <Link to="/dashboard"><button>View Sport Dashboard</button></Link>
      </div>

      <Footer />
    </>
  );
}
