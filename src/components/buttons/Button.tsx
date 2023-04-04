interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="h-8 w-24 rounded-sm bg-lt-primary text-sm text-primary-color-text hover:bg-dk-primary dark:bg-dk-primary dark:hover:bg-lt-primary"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
