import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
import SignIn from "../../components/sign-in-form/sign-in-form-component";
import "./authentication.styles.scss";
function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
