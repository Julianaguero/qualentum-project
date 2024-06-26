import "./Login-Form.css";
import CustomButton from "../Buttons/CustomButton";
import FormInput from "./FormInput";
import { userInputs } from "../../utils/constants";
import useUserContext from "../../hooks/useUserContext";



const LoginForm  = (): JSX.Element => {

  const {userData, isLogged, handleChange, handleLogin, handleLogout} = useUserContext()

  return (
    <section id="login-form" >
      {isLogged ? (
        <div className="login-form__container login-form__logout-container ">
          <p>¿Quieres cerrar sesión, {userData.username}?</p>
          <CustomButton
            text="Log Out"
            className="login-form__button"
            action={handleLogout}
          />
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form__container">
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
