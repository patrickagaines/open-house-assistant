interface SelectInputProps extends React.ComponentPropsWithoutRef<"select"> {
  id: string;
  name: string;
  label: string;
  value: string | undefined;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectInput = ({
  id,
  name,
  label,
  value,
  options,
  onChange,
  ...props
}: SelectInputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        className="mt-1 w-full rounded-sm border border-lt-border bg-lt-surface p-1 text-sm text-lt-text dark:border-dk-border dark:bg-dk-surface dark:text-dk-text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((option, index) => (
          <option key={`${option} ${index}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
