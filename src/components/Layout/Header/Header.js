import style from "./Header.module.css";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <header className={style.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onCheck} />
    </header>
  );
};
export default Header;
