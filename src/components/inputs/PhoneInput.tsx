import { useRef } from "react";
import { PhoneNumber } from "../../ts/interfaces";

interface PhoneInputProps {
  phoneInput: PhoneNumber;
  setPhoneInput: React.Dispatch<React.SetStateAction<PhoneNumber>>;
}

export const PhoneInput = ({ phoneInput, setPhoneInput }: PhoneInputProps) => {
  const prefixRef = useRef<HTMLInputElement>(null);
  const lineNumberRef = useRef<HTMLInputElement>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneInput({
      ...phoneInput,
      [e.target.name]: e.target.value.replace(/[^\d]/g, ""),
    });
    handleFocus(e.target.name, e.target.value.replace(/[^\d]/g, ""));
  };

  const handleFocus = (inputName: string, inputValue: string) => {
    if (inputName === "areaCode" && inputValue.length === 3) {
      prefixRef.current?.focus();
    } else if (inputName === "prefix" && inputValue.length === 3) {
      lineNumberRef.current?.focus();
    }
  };

  return (
    <fieldset>
      <legend className="text-lt-heading dark:text-dk-heading">Phone Number</legend>
      <div className="theme-border theme-surface input mt-1 flex items-center rounded-sm px-1 outline-1 focus-within:outline">
        <div>&#40;</div>
        <input
          className="border-none outline-none"
          type="text"
          id="areaCode"
          name="areaCode"
          maxLength={3}
          minLength={3}
          placeholder="xxx"
          style={{ width: "32px" }}
          value={phoneInput.areaCode}
          onChange={(e) => handleChange(e)}
          required
        />
        <div>&#41;</div>
        <input
          ref={prefixRef}
          className="ml-1 border-none outline-none"
          type="text"
          id="prefix"
          name="prefix"
          maxLength={3}
          minLength={3}
          placeholder="xxx"
          style={{ width: "32px" }}
          value={phoneInput.prefix}
          onChange={(e) => handleChange(e)}
          required
        />
        <div>-</div>
        <input
          ref={lineNumberRef}
          className="border-none outline-none"
          type="text"
          id="lineNumber"
          name="lineNumber"
          maxLength={4}
          minLength={4}
          placeholder="xxxx"
          value={phoneInput.lineNumber}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
    </fieldset>
  );
};
