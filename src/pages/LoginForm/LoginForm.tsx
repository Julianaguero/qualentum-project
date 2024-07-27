import "./LoginForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import FormInput from "../../components/Login/FormInput";
import { useAuthActions, useThemeActions } from "../../hooks";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormUserProps {
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
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
    getValues,
    watch
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
      if(errors[field])  {
        clearErrors(field);
      }

      const valueToWatch = watch(field)
      const password = getValues("password");
      const confirmPassword = getValues("confirmPassword");

      if (field  === "userName" && ( valueToWatch.length < 4 || valueToWatch.length > 8)) {
        return setError(field, {
          message: "El nombre de usario debe contener entre 4 y 8 caracteres."
        })
      }
      if(field === "mail" && !valueToWatch.includes("@")) {
        return setError(field, {
          message: "Debe ingresar un mail válido."
        })
      }     
      if(field === "password" && valueToWatch.length < 6) {
        return setError(field, {
          message: "La contraseña debe contener al menos 6 caracteres."
        })
      } 
      if(field === "password" && valueToWatch.length < 6) {
        return setError(field, {
          message: "La contraseña debe contener al menos 6 caracteres."
        })
      }  
      if (field === "confirmPassword") {
        if (confirmPassword !== password) {
          setError("confirmPassword", {
            type: "mismatch",
            message: "Las contraseñas deben coincidir."
          });
        } else {
          clearErrors("confirmPassword");
        }
      }
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
            {...register("userName", {
              required: "Debe ingresar un nombre de usuario",
              minLength: {
                value: 4,
                message: "El nombre de usario debe contener entre 4 y 8 caracteres."
              },
              maxLength: {
                value: 8,
                message: "El nombre de usario debe contener entre 4 y 8 caracteres."
              }
            })}
            onBlur={() => handleErrors("userName")}
            autoFocus
            errorMessage={errors.userName?.message}
          />
          <FormInput
            id="form__user-mail"
            label="Email"
            type="text"
            placeholder="Ingrese su email..."
            {...register("mail", {
              required: "Es necesario ingresar un email.",
              validate: (value) => value.includes("@") || "Debes ingresar un email valido.",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres."
              },
            })}
            onBlur={() => handleErrors("mail")}
            errorMessage={errors.mail?.message}
          />

          <FormInput
            id="form__user-password"
            label="Contraseña"
            type="password"
            placeholder="Ingrese su contraseña..."
            {...register("password", {
              required: "Debe ingresar una contraseña.",
              minLength: {
                value: 4,
                message: "La contraseña debe tener al menos 6 caracteres."
              }
            })}
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
