import { useState } from "react";

export default function LoginPage() {
  const [name, setName] = useState("");
  // const handleClicK = () => {
  //   if (name.length > 0) alert(`Bonjour ${name}`);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${name}`);
    setName("");
  };

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h3>Connectez-vous</h3>
      <form action="submit" onSubmit={handleSubmit}>
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
