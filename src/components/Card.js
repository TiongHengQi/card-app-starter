import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  return (
    <div className="card">
      <img src={card.card_pic} alt={card.card_name} />
      <h2>{card.card_name}</h2>
      <p>ID: {card.id}</p>

      <div className="card-actions">
        <Link to={`/cards/${card.id}/edit`}>Edit</Link>

        <button
        onClick={() => {
          console.log("Delete clicked", card.id);
          onDelete(card);
        }}
        disabled={busy}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
