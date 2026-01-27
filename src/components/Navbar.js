import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
  // Check if user is logged in
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/"); // or /login
  }

  return (
    <header className="NavBar">
      <NavLink to="/" end className="NavBar-title">
        <strong>Card Management App</strong>
      </NavLink>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/cards" end>
          Cards
        </NavLink>
      </nav>
      <nav>
        <NavLink to="/cards/new" end>
          Add Card
        </NavLink>
      </nav>
      <nav>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </header>
  );
}
