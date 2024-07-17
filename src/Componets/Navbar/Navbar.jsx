import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <Link to='/' className="logo">LiftBeats</Link>
      <Link to='/'>Home</Link>
      <Link to='/songs'>Songs</Link>
      <Link to='/songs/new'>New Song</Link>
    </nav>
  );
}
