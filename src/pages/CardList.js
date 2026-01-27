import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [visibility, setVisibility] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const data = await getCards();
      setCards(data);
    } catch (error) {
      console.error("Failed to load cards", error);
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
    const token = localStorage.getItem("token");
    if (!token) {
      setVisibility(false);
    } else {
      setVisibility(true);
    };
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(card) {
    setBusy(true);
    setError("");
    try {
      // delete from backend
      const res = await deleteCard(card.id);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // remove from local state
      setCards((prevCards) => prevCards.filter((c) => c.id !== card.id));
    } catch (error) {
      console.error("Failed to delete card", error);
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <main className="Center"><p>Loading...</p></main>;
  if (!cards) return <main className="Center"><p>Card not found</p></main>;

  return (
    <main>
      <h2 className="cardList-title">All Cards</h2>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isVisible={visibility}
            onDelete={handleDelete}
            busy={busy}
            error={error}
          />
        ))}
      </div>
    </main>
  );
}
