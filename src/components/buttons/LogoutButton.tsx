import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return <Button type="button" onClick={handleLogout}>Log Out</Button>;
};
