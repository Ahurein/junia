import { useState, useContext } from "react";
import {
  googleSignInWithPopup,
  createUserDocFromAuth,
  auth,
  signInAuthWithemailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormInput from "../form-input/form-input-component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in-form-styles.scss";

const defaultFields = {
  email: "",
  password: "",
};

function SignIn() {
  const [loginInfo, setLoginInfo] = useState(defaultFields);
  const { email, password } = loginInfo;

  const signInWithGoogle = async () => {
    const { user } = await googleSignInWithPopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  const resetForms = () => {
    setLoginInfo(defaultFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const formHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await signInAuthWithemailAndPassword(email, password);
      resetForms();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this account");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>

      <span>Sign in with your email and password</span>
      <form onSubmit={formHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          id="email1"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id="password1"
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button>Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
