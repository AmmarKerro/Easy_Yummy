import LoginPage from "./components/pages/login/LoginPage";

import "./App.css";
import { Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";

function App() {
  return (
    <Routes>
      <Routes path="/" elements={<LoginPage />} />
      <Routes path="/order" elements={<OrderPage />} />
      <Routes path="*" elements={<ErrorPage />} />
    </Routes>
  );
}

export default App;
