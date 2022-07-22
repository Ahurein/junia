import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  db,
} from "../../utils/firebase/firebase.utils";
import { doc, getDoc, setDoc } from "firebase/firestore";
import FormInput from "../form-input/form-input-component";
import "./sign-up-form-styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForms = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (events) => {
    const { name, value } = events.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formHandler = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );

        await createUserDocFromAuth(user, {
          displayName,
        });
        resetForms();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot ceate a user, email already in use");
        } else {
          console.log(error);
        }
      }
    } else {
      alert("Password doesn't match");
      return;
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={formHandler}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          id=""
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
