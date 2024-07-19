import LoginPage from "./components/pages/login/LoginPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderPage from "./components/pages/order/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:name" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
