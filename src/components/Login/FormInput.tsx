import { forwardRef, useState } from "react";
import "./FormInput.css"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string,
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  name,
  label,
  value,
  errorMessage,
  handleChange,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(false);
  };

  const handleBlur = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input__input"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-focused={focused.toString()}
        ref={ref}  // Agregar ref aquí
        {...props}
      />
      {errorMessage && <span className="form-input__error">{errorMessage}</span>}
    </div>
  );
});

export default FormInput;