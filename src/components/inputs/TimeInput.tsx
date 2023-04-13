interface TimeInputProps extends React.ComponentPropsWithoutRef<"input"> {
  id: string;
  name: string;
  label: string;
  value: string | undefined;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TimeInput = ({
  id,
  name,
  label,
  value,
  onBlur,
  onChange,
  ...props
}: TimeInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="time"
        className="mt-1"
        id={id}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
