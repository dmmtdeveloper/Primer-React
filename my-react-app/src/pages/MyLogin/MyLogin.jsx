import { Link } from "react-router-dom";

function MyLogin() {
  return (
    <div>
      <h1>MyLogin</h1>
    <div>
      <input type="name" />
      <input type="email" />
      <input type="password" />
    </div>

      <div>
        <Link to="/">ir a la página principal</Link>
        <Link to="/register">ir a Register</Link>
      </div>
    </div>
  );
}

export default MyLogin;
