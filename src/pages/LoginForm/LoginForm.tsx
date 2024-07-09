import "./LoginForm.css"; 
import { userInputs } from "../../utils/constants";
import useAuthContext from "../../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import FormInput from "../../components/Login/FormInput";
import { useThemeContext } from "../../hooks";



const LoginForm  = (): JSX.Element => {
  const { theme } = useThemeContext()
  const navigate = useNavigate();
  const location = useLocation();

  const {userData, isLogged, handleChange, handleLogin, handleLogout} = useAuthContext()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleLogin(event);
    navigate(location.state.pathname)
  }

  const handleUserLogout = () => {
    handleLogout();
    navigate("/");
  }

  return (
    <section id="login-form" className={theme}>
      
      {isLogged ? (
        <div className="login-form__container login-form__logout-container ">
          <p>¿Quieres cerrar sesión, {userData.username}?</p>
          <CustomButton
            text="Log Out"
            className="login-form__button"
            action={handleUserLogout}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form__container">
          <h1>Login</h1>
          {userInputs.map((input) => (
            <FormInput
              key={input.id}
              value={userData[input.name]}
              handleChange={handleChange}
              {...input}
            />
          ))}
          <div className="login-form__button-container">
            <CustomButton
              text="Log in"
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
