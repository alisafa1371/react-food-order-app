import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import style from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      ...props.data,
      amount: amount,
    });
  };
  return (
    <li className={style["meals-item"]}>
      <div className={style["item-info"]}>
        <h2>{props.data.name}</h2>
        <span className={style["item-description"]}>
          {props.data.description}
        </span>
        <span className={style["item-price"]}>
          ${props.data.price.toFixed(2)}
        </span>
      </div>
      <div className={style["item-quantity"]}>
        <MealsItemForm onAdd={addItemToCartHandler} />
      </div>
    </li>
  );
};
export default MealsItem;
