import { Route, Routes } from "react-router-dom";
import { Callback } from "./pages/Callback";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  );
};
