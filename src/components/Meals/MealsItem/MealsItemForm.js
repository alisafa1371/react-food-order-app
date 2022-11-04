import style from "./MealsItemForm.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { useRef } from "react";

const MealsItemForm = (props) => {
  const amountInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    )
      return;
    props.onAdd(+enteredAmount);
  };
  return (
    <form className={style.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          id: Math.random(),
          type: "number",
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <Button>+ Add</Button>
    </form>
  );
};
export default MealsItemForm;
