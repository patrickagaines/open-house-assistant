interface TimeInputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
  name: string;
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TimeInput = ({ id, name, label, value, onChange, ...props }: TimeInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="time"
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
