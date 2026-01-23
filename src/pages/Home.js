import { Link } from "react-router-dom";

export default function Home() {
  /* TODO: Design and complete the Home page
    - display instructions
    - link to Cards page
    - style as a landing page */
  return (
  <main>
    <div className="Center">
      <h2>Welcome to our Card Management App.</h2>
      <p>Organize and manage your card collection with ease.</p>
      <p>Click <Link to={`/cards`}>here</Link> to view your cards.</p>
    </div>
  </main>
);
}