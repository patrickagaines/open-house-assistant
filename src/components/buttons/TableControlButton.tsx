interface TableControlButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
}

export const TableControlButton = ({ onClick, disabled, children }: TableControlButtonProps) => {
  return (
    <button
      className="rounded-sm border border-lt-border bg-lt-surface p-1 dark:border-dk-border dark:bg-dk-surface"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
