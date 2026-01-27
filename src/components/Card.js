import { Link } from "react-router-dom";

export default function Card({ card, isVisible, onDelete, busy }) {
  return (
    <div className="card">
      <img src={card.card_pic} alt={card.card_name} />
      <div className="text">
        <h2>{card.card_name}</h2>
        <p>ID: {card.id}</p>
      </div>
      

      <div className="card-actions">
        <Link to={`/cards/${card.id}/edit`} className="button-link">Edit</Link>

        <button
        className="delete"
        style={{ display: isVisible ? "inline-block" : "none" }}
        onClick={() => {
          if (window.confirm(`Are you sure you want to delete ${card.card_name}?`)) {
            console.log("Delete clicked", card.id);
            onDelete(card);
          }
        }}
        disabled={busy}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
