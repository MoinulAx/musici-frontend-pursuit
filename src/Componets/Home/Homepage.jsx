// HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./home.scss"; // Import the SCSS file

export default function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>LiftBeats</h1>
        <h2>Welcome to LiftBeats</h2>
        <p>Your ultimate destination for adding and managing workout songs!</p>
      </header>
      <main>
      <nav>
          <Link to="/songs" className="nav-link">View Songs</Link>
          <Link to="/songs/new" className="nav-link">Add New Song</Link>
        </nav>
        
      </main>
    </div>
  );
}
