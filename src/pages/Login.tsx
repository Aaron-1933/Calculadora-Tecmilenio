import "./Login.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import SocialButton from "../components/SocialButton";
import AboutLink from "../components/AboutLink";
import calculatorIcon from "../assets/calculator_46872.webp";
import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  const loginAlert = () => {
    Swal.fire({
      title: "Bienvenido!",
      text: "Haz iniciado sesion",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/calculator");
      }
    });
  };

  const registerAlert = () => {
    Swal.fire({
      title: "Registro",
      input: "email",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/calculator");
      }
    });
  };

  const facebookLogin = () => {
    Swal.fire({
      title: "Iniciando con Facebook…",
      icon: "info",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/calculator");
      }
    });
  };

  const googleLogin = () => {
    Swal.fire({
      title: "Iniciando con Google...",
      icon: "info",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/calculator");
      }
    });
  };

  return (
      <div className="container">
        <Card>
          <h1>Bienvenido</h1>
          <h2>Calculadora App</h2>
          <img className="icon-image" src={calculatorIcon} alt="icon" />
          <Button
            className="btn login-button"
            text="Iniciar Sesion"
            onClick={loginAlert}
          />
          <Button
            className="btn register-button"
            text="Registrarse"
            onClick={registerAlert}
          />
          <p>---------Iniciar sesion con ---------</p>
          <div className="socials">
            <SocialButton
              icon={facebookIcon}
              alt="Facebook"
              onClick={facebookLogin}
            />
            <SocialButton
              icon={googleIcon}
              alt="Google"
              onClick={googleLogin}
            />
          </div>
          <AboutLink />
        </Card>
      </div>
  );
}

export default Login;
