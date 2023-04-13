interface DateInputProps {
  id: string;
  name: string;
  label: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateInput = ({ id, name, label, value, onChange }: DateInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="date" className="mt-1" id={id} name={name} value={value} onChange={onChange} />
    </div>
  );
};
