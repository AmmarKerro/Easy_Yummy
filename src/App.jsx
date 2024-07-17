import { useState } from "react";

import "./App.css";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const [name, setName] = useState("");

  const handleClicK = () => {
    if (name.length > 0) alert(`Bonjour ${name}`);
  };
  return <LoginPage />;
}

export default App;
