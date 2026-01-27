import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    card_name: "",
    card_pic: "",
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    setBusy(true);
    setError("");
    try {
      await addCard(values);
      navigate("/cards");
    } catch (error) {
      console.error("Failed to add card", error);
      setError("Failed to add card");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main >
      <CardForm
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
};