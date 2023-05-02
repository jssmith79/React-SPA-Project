import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div class="navbar">
        <ul>
        <li><Link to="/" class="w3-bar-item w3-button">Home</Link></li>
        <li><a href="https://github.com/jssmith79" class="w3-bar-item w3-button" target="_blank">My GitHub Link</a></li>
        <li><Link to="/about" class="w3-bar-item w3-button">About</Link></li>
        <li><Link to="/contact" class="w3-bar-item w3-button">Contact Information</Link></li>
        </ul>
        <br></br>
      </div>
    </div>
  );
}

export default Navbar;