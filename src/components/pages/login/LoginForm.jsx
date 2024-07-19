import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h3>Connectez-vous</h3>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <button type="submit">Accéder à votre espace</button>
        <Link to="/order">Vers OrderPage</Link>
      </form>
    </div>
  );
}
