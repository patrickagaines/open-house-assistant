interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
  name: string;
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ id, name, label, value, onChange, ...props }: TextInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        className="mt-1"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
