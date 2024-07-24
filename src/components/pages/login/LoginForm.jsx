import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
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
      </LoginFormStyled>
    </div>
  );
}

const LoginFormStyled = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
`;
