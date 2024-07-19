import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    navigate(`/order/${name}`);
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
      </form>
    </div>
  );
}
