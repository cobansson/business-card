import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faTwitterSquare} className="footer-icon" />
      <FontAwesomeIcon icon={faFacebookSquare} className="footer-icon" />
      <FontAwesomeIcon icon={faInstagramSquare} className="footer-icon" />
      <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
    </footer>
  );
}
