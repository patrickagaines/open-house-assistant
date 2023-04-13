interface TableActionButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactElement;
}

export const TableActionButton = ({ children, onClick, icon }: TableActionButtonProps) => {
  return (
    <button
      type="button"
      className="ml-1 flex h-8 w-24 items-center justify-center rounded-sm bg-lt-primary text-sm text-primary-color-text hover:bg-dk-primary dark:bg-dk-primary dark:hover:bg-lt-primary"
      onClick={onClick}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
};
