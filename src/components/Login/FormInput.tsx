import { useState } from "react";
import "./FormInput.css"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  value,
  errorMessage,
  handleChange,
  ...props
}) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => {
        setFocused(false)
    }
    const handleblur = () => {
        setFocused(true)
    }

  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input__input"
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleblur}
        data-focused={focused.toString()}
        {...props}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
