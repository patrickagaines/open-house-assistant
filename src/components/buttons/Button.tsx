interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-lt-primary text-primary-color-text hover:bg-dk-primary dark:bg-dk-primary dark:hover:bg-lt-primary w-24 h-8 rounded-sm"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
