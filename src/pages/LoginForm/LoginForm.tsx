import "./LoginForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import FormInput from "../../components/Login/FormInput";
import { useAuthActions, useThemeActions } from "../../hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { userValidationRules } from "../../utils/FormValidationRules";

export interface FormUserProps {
  userName: string;
  mail: string;
  password: string;
  confirmPassword: string;
}

const LoginForm = (): JSX.Element => {
  const { theme } = useThemeActions();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<FormUserProps>();

  const { userData, isLogged, handleLogin, handleLogout } = useAuthActions();

  const onSubmit: SubmitHandler<FormUserProps> = (data) => {
    handleLogin(data)
    navigate(location.state?.pathname || "/"); 
  };

  const handleUserLogout = () => {
    handleLogout();
    navigate("/");
  };

  const handleErrors = (field: keyof FormUserProps) => {
    trigger(field)
  };

  return (
    <section id="login-form" className={theme}>
      {isLogged ? (
        <div className="login-form__container login-form__logout-container">
          <p>¿Quieres cerrar sesión, {userData.username}?</p>
          <CustomButton
            text="Log Out"
            className="login-form__button"
            action={handleUserLogout}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="login-form__container">
          <h1>Login</h1>
          <FormInput
            id="form__user-name"
            label="Nombre"
            type="text"
            placeholder="Ingrese su nombre..."
            {...register("userName", userValidationRules.userName)}
            onBlur={() => handleErrors("userName")}
            autoFocus
            errorMessage={errors.userName?.message}
          />
          <FormInput
            id="form__user-mail"
            label="Email"
            type="text"
            placeholder="Ingrese su email..."
            {...register("mail", userValidationRules.mail)}
            onBlur={() => handleErrors("mail")}
            errorMessage={errors.mail?.message}
            autoComplete="off"
          />

          <FormInput
            id="form__user-password"
            label="Contraseña"
            type="password"
            placeholder="Ingrese su contraseña..."
            {...register("password", userValidationRules.password)}
            autoComplete="new-password"
            onBlur={() => handleErrors("password")}
            errorMessage={errors.password?.message}
          />

          <FormInput
            id="form__user-confirmPassword"
            label="Repita la contraseña"
            type="password"
            placeholder="Repita su contraseña..."
            {...register("confirmPassword",  {
              required: "Debe repetir la contraseña.",
              validate: (value) => value === getValues("password") || "Las contraseñas ingresadas no coinciden."
            })}
            autoComplete="off"
            onBlur={() => handleErrors("confirmPassword")}
            errorMessage={errors.confirmPassword?.message}
          />

          <div className="login-form__button-container">
            <CustomButton
              disabled={isSubmitting}
              text={isSubmitting ? "Sending..." : "Log in"}
              type="submit"
              className="login-form__button"
            />
          </div>
        </form>
      )}
    </section>
  );
};

export default LoginForm;
