import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/PageLoader";
import { AuthenticationGuard } from "./components/authentication/AuthenticationGuard";
import { Layout } from "./components/layout/Layout";
import { Callback } from "./pages/Callback";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";

export const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AuthenticationGuard component={Dashboard} />} />
        <Route path="/callback" element={<Callback />} />
      </Route>
    </Routes>
  );
};
