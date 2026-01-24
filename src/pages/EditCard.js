import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState({}); // changed from [] to {}
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const cards = await getCards();
        const found = cards.find((c) => c.id === Number(id));
        setCard(found);
      } catch (err) {
        console.error("Failed to load card", err);
        setError("Failed to load card");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  async function handleUpdate(card) {
    setBusy(true);
    setError("");
    try {
      await updateCard(id, card);
      navigate("/cards");
    } catch (err) {
      console.error("Failed to edit card", err);
      setError("Failed to edit card");
    } finally {
      setBusy(false);
    }
  }

  if (loading)
    return (
      <main className="Center">
        <p>Loading...</p>
      </main>
    );

  return (
    <main>
      <CardForm
        values={card}
        onChange={handleChange}
        onSubmit={handleUpdate}
        busy={busy}
        error={error}
        submitText={"Edit Card"}
      />
    </main>
  );
}
