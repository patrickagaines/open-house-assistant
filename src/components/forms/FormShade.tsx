interface FormShadeProps {
  children: React.ReactElement;
}

export const FormShade = ({ children }: FormShadeProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-black bg-opacity-30 sm:flex sm:items-center sm:justify-around">
      {children}
    </div>
  );
};
