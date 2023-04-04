interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed left-0 top-0 h-16 w-full border-b border-b-lt-border backdrop-blur-sm dark:border-b-dk-border lg:h-20">
      {children}
    </header>
  );
};
