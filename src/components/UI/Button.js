import style from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.button} ${props.className}`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
