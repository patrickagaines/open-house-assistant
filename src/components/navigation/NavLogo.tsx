import { Link } from "react-router-dom";
import { Logo } from "../../assets/logo";

interface NavLogoProps {
  setNavMenu?: React.Dispatch<React.SetStateAction<"closed" | "open">>;
}

export const NavLogo = ({ setNavMenu }: NavLogoProps) => {
  const handleCloseNavMenu = () => {
    if (setNavMenu !== undefined) {
      setNavMenu("closed");
    }
  };

  return (
    <Link to="/" aria-label="Go to Home Page" onClick={handleCloseNavMenu}>
      <Logo />
    </Link>
  );
};
