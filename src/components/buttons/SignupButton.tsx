import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/dashboard",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return <Button type="button" onClick={handleSignUp}>Sign Up</Button>;
};
