import { useEffect, useState } from "react";

interface DebouncedInputProps {
  value: string;
  onChange: (value: string) => void;
  debounce?: number;
}

export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
}: DebouncedInputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      type="text"
      className="rounded-sm border border-lt-border bg-lt-surface p-2 shadow-sm placeholder:text-lt-text dark:border-dk-border dark:bg-dk-surface dark:placeholder:text-dk-text"
      placeholder="Search all columns..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
