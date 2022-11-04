import style from "./OrderingCartItems.module.css";
const OrderingCartItems = (props) => {
  return (
    <>
      <li className={style["cart-item"]}>
        <div>
          <h2 className={style["cart-item__title"]}>{props.itemInfo.name}</h2>
          <div className={style["cart-item__purchase-info"]}>
            <span className={style["cart-item__price"]}>
              ${props.itemInfo.price}
            </span>
            <span className={style["cart-item__quantity"]}>
              x{props.itemInfo.amount}
            </span>
          </div>
        </div>
        <div className={style["cart-item__btns"]}>
          <button onClick={props.onRemoveItem}>-</button>
          <button onClick={props.onAddItem}>+</button>
        </div>
      </li>
    </>
  );
};
export default OrderingCartItems;
