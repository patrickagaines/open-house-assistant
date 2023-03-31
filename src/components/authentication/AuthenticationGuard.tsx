import { withAuthenticationRequired } from "@auth0/auth0-react";
import { PageLoader } from "../PageLoader";

interface AuthenticationGuardProps {
  component: React.FC;
}

export const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
  });

  return <Component />;
};
