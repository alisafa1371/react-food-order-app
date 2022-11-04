import useInput from "../../Hooks/use-input";
import Button from "../UI/Button";
import style from "./Checkout.module.css";

const Checkout = (props) => {
  const {
    value: enteredEmail,
    isValid: isEmailValid,
    hasError: hasEmailError,
    inputChangeHandler: inputEmailChangeHandler,
    inputBlurHandler: inputEmailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  );

  const {
    value: enteredPassword,
    isValid: isPasswordValid,
    hasError: hasPasswordError,
    inputChangeHandler: inputPasswordChangeHandler,
    inputBlurHandler: inputPasswordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) =>
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/.test(value)
  );

  let isFormValid = false;

  if (isEmailValid && isPasswordValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    resetEmailInput();
    resetPasswordInput();
    props.onConfirm({
      emailValue: enteredEmail,
      passwordValue: enteredPassword,
    });
  };

  const emailControlledClass = `${style.input} ${
    hasEmailError ? style.invalid : ""
  }`;

  const passwordControlledClass = `${style.input} ${
    hasEmailError ? style.invalid : ""
  }`;

  return (
    <form className={style.form} onSubmit={formSubmitHandler}>
      <div className={style["form-row"]}>
        <label>Email</label>
        <input
          className={emailControlledClass}
          type="email"
          placeholder="test@yahoo.com"
          value={enteredEmail}
          onChange={inputEmailChangeHandler}
          onBlur={inputEmailBlurHandler}
        ></input>
        {hasEmailError && (
          <p className={style.error}>Please insert a valid Email</p>
        )}
      </div>
      <div className={style["form-row"]}>
        <label>Password</label>
        <input
          className={passwordControlledClass}
          type="password"
          value={enteredPassword}
          onChange={inputPasswordChangeHandler}
          onBlur={inputPasswordBlurHandler}
        ></input>
        {hasPasswordError && (
          <p className={`${style.error} + ${style["password-error"]}`}>
            Minimum 8 characters ,At least one upper case letter,on lower case
            letter, one digit , one special character
          </p>
        )}
      </div>
      <div className={style["checkout-btns"]}>
        <Button type="submit" disabled={!isFormValid}>
          Confirm
        </Button>
        <Button
          type="buttom"
          className={style["close-btn"]}
          onClick={props.onCancel}
        >
          Close
        </Button>
      </div>
    </form>
  );
};
export default Checkout;
