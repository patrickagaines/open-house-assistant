import { useNavigate } from "react-router-dom";
import { DetailIcon } from "../../assets/icons";

interface TableDetailButtonProps {
  route: string;
}

export const TableDetailButton = ({ route }: TableDetailButtonProps) => {
  const navigate = useNavigate();

  return (
    <button type="button" className="mx-auto block" onClick={() => navigate(route)}>
      <DetailIcon />
    </button>
  );
};
