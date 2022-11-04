import "./App.css";
import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Banner from "./components/Layout/Banner/Banner";
import Meals from "./components/Meals/Meals";
import OrderingCart from "./components/OrderingCart/OrderingCart";
import CartProvider from "./store/cart-provider";

function App() {
  const [checkOrder, setCheckOrder] = useState(false);
  const showOrderHandler = () => {
    setCheckOrder(true);
  };
  const hideOrderHandler = () => {
    setCheckOrder(false);
  };
  return (
    <CartProvider>
      {checkOrder && <OrderingCart onCancel={hideOrderHandler} />}
      <Header onCheck={showOrderHandler} />
      <Banner />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
