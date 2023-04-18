import { ExitIcon } from "../../assets/icons";

interface EndOpenHouseButtonProps {
  handleEndOpenHouse: () => void;
}

export const EndOpenHouseButton = ({ handleEndOpenHouse }: EndOpenHouseButtonProps) => {
  return (
    <button className="fixed bottom-3 right-3" onClick={handleEndOpenHouse}>
      <div className="flex items-center space-x-1">
        <span>End</span>
        <ExitIcon />
      </div>
    </button>
  );
};
