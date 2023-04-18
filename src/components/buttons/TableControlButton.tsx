interface TableControlButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

export const TableControlButton = ({ onClick, disabled, children }: TableControlButtonProps) => {
  return (
    <button
      type="button"
      className="theme-surface theme-border rounded-sm p-1"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
