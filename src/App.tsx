import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import { AuthenticationGuard } from "./components/authentication/AuthenticationGuard";
import { Layout } from "./components/layout/Layout";
import { PageLoader } from "./components/navigation/PageLoader";
import { Callback } from "./pages/Callback";
import { Dashboard } from "./pages/Dashboard";
import { Guests } from "./pages/Guests";
import { Home } from "./pages/Home";
import { OpenHouseDetail } from "./pages/OpenHouseDetail";
import { Properties } from "./pages/Properties";
import { PropertyDetail } from "./pages/PropertyDetail";

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
        <Route
          path="/open-houses/:openHouseId"
          element={<AuthenticationGuard component={OpenHouseDetail} />}
        />
        <Route path="/properties" element={<AuthenticationGuard component={Properties} />} />
        <Route
          path="/properties/:propertyId"
          element={<AuthenticationGuard component={PropertyDetail} />}
        />
        <Route path="/guests" element={<AuthenticationGuard component={Guests} />} />
        <Route path="/callback" element={<Callback />} />
      </Route>
    </Routes>
  );
};
