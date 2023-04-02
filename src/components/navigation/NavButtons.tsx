import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../authentication/LoginButton";
import { LogoutButton } from "../authentication/LogoutButton";
import { SignupButton } from "../authentication/SignupButton";

export const NavButtons = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && <LogoutButton />}
    </>
  );
};
