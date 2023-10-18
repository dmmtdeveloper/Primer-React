import { Link } from "react-router-dom";
import "./MyMain.css";

function MyMain() {
  return (
    <div className="main-container">
      <h1 className="main-title">My Main</h1>
      <div className="main-link">
        <Link className="main-btn" to="/register">ir a Register</Link>
        <Link className="main-btn" to="/login">ir a login</Link>
      </div>
    </div>
  );
}

export default MyMain;
