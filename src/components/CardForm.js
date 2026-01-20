export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  /* TODO: Complete the CardForm component 
  - display form inputs for card_name and card_pic
  - display error message
  - display submit button 
  - handle form submission 
  - style as a form UI */

  function handleSubmit(e) {
    e.preventDefault();
    if (!busy) {
      onSubmit();
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2 >Card Form</h2>

      <div>
        <label htmlFor="card_name">
          Card Name
        </label>
        <input
          id="card_name"
          name="card_name"
          type="text"
          value={values.card_name}
          onChange={onChange}
          disabled={busy}
          required
        />
      </div>

      <div>
        <label htmlFor="card_pic">
          Card Image URL
        </label>
        <input
          id="card_pic"
          name="card_pic"
          type="text"
          value={values.card_pic}
          onChange={onChange}
          disabled={busy}
          required
        />
      </div>

      {error && <div>{error}</div>}

      <button type="submit" disabled={busy}>
        {busy ? "Submitting..." : submitText}
      </button>
    </form>
  );
};