import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/userThunks";
import Button from "../Button/Button";

const LoginForm: React.FunctionComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    dispatch(loginThunk(formData));
  };

  const isFilled = formData.username === "" && formData.password === "";

  return (
    <>
      <h2>Identifícate:</h2>
      <form
        autoComplete="off"
        onSubmit={(event) => event.preventDefault()}
        noValidate
      >
        <section>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            id="password"
            required
          />
          <Button
            text="Iniciar sesión"
            actionOnClick={submitForm}
            disableCondition={isFilled}
          />
        </section>
        <section>
          <p>
            ¿No tienes cuenta?{" "}
            <Link href={"/user/register"}>Regístrate aquí</Link>
          </p>
        </section>
      </form>
    </>
  );
};

export default LoginForm;
