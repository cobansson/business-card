import profilePic from "./images/engin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav>
      <div className="button-container white">
        <FontAwesomeIcon icon={faEnvelope} />
        <p>Email</p>
      </div>
      <div className="button-container blue">
        <FontAwesomeIcon icon={faLinkedin} />
        <p>LinkedIn</p>
      </div>
    </nav>
  );
}

export default function Header() {
  return (
    <header>
      <img src={profilePic} />
      <div className="header-container">
        <h1>Engin Cobanoglu</h1>
        <h3>Frontend Developer</h3>
        <Navbar />
      </div>
    </header>
  );
}
