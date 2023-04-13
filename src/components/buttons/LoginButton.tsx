import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
    });
  };

  return <Button type="button" onClick={handleLogin}>Log In</Button>;
};
