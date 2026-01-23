import { NavLink } from "react-router-dom";
export default function Navbar() {
  /* TODO: Complete the navbar 
    - add links to CardList and AddCard pages 
    - style as a navbar UI */

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
    </header>
  );
}
