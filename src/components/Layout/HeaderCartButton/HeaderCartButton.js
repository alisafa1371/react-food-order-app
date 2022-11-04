import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import style from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${style["cart-btn"]} ${btnAnimation ? style.bump : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={style["cart-btn__icon"]}>
        <FontAwesomeIcon icon={faCartShopping} />
      </span>
      <h4>Your cart</h4>
      <span className={style["cart-btn__quantity"]}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
