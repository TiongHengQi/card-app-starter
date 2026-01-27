const API_URL = process.env.REACT_APP_API_URL || "";

function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function login(credentials) {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
}

export async function getCards() {
  // GET /allcards (provided as reference)
  const res = await fetch(`${API_URL}/allcards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export function addCard(card) {
  // TODO: implement POST /addcard
  return fetch(`${API_URL}/addcards`, {
    method: "POST",
    headers: {"Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(card),
  });
}

export function updateCard(id, card) {
  // TODO: implement PUT /updatecard/:id
  return fetch(`${API_URL}/updatecards/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(card),
  });
}

export function deleteCard(id) {
  // TODO: implement DELETE /deletecard/:id
  return fetch(`${API_URL}/deletecards/${id}`, {
    method: "DELETE",
  });
}