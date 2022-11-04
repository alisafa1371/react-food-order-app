import { useContext, useState } from "react";
import style from "./OrderingCart.module.css";

import CartContext from "../../store/cart-context";
import CircleLoader from "react-spinners/CircleLoader";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";
import OrderingCartItems from "./OrderingCartItems";
import Checkout from "./Checkout";

const OrderingCart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isCheckedout, setIsCheckedout] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(null);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <OrderingCartItems
          itemInfo={item}
          key={item.id}
          onAddItem={cartItemAddHandler.bind(null, item)}
          onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const orderFormHandler = () => {
    setIsCheckedout(true);
  };

  const submitOredrHandler = async (userData) => {
    try {
      setIsSubmitting(true);
      const data = { user: userData, orderedItems: cartCtx.items };
      const response = await fetch(
        "https://newp-25379-default-rtdb.firebaseio.com/orders.json",
        {
          method: "Post",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setIsSubmitting(false);
      setIsSubmited(true);

      if (!response.ok) {
        setIsSuccessful(false);
        throw new Error();
      } else {
        setIsSuccessful(true);
      }
    } catch (error) {
      setIsSubmited(true);
      setIsSubmitting(false);
    }
    cartCtx.resetItem();
  };

  const modalActions = (
    <>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style["action-btns"]}>
        <Button className={style["close-btn"]} onClick={props.onCancel}>
          Close
        </Button>
        {hasItem && <Button onClick={orderFormHandler}>Order</Button>}
      </div>
    </>
  );
  const orderingCartContent = (
    <>
      {!isCheckedout && modalActions}
      {isCheckedout && (
        <Checkout onCancel={props.onCancel} onConfirm={submitOredrHandler} />
      )}
    </>
  );

  const loadingSpiner = (
    <CircleLoader className={style.spinner} color="#36d7b7" />
  );
  const fetchMessage = (
    <p
      className={`${style["fetch-message"]} ${
        isSuccessful ? style.successful : style.faild
      }`}
    >
      {isSuccessful ? "Successful" : "Faild to Fetch Data"}
    </p>
  );
  return (
    <Modal onCancel={props.onCancel}>
      <Card>
        {!isSubmitting && !isSubmited && orderingCartContent}
        {isSubmitting && loadingSpiner}
        {isSubmited && fetchMessage}
      </Card>
    </Modal>
  );
};
export default OrderingCart;
