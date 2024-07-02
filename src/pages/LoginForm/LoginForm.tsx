import "./LoginForm.css"; 
import { userInputs } from "../../utils/constants";
import useUserContext from "../../hooks/useAuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import FormInput from "../../components/Login/FormInput";



const LoginForm  = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const {userData, isLogged, handleChange, handleLogin, handleLogout} = useUserContext()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleLogin(event);
    navigate(location.state.pathname)
  }

  const handleUserLogout = () => {
    handleLogout();
    navigate("/");

  }

  return (
    <section id="login-form" >
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
