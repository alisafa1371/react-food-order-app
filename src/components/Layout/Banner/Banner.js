import style from "./Banner.module.css";
import mealsImg from "../../../assets/meals.jpg";
const Banner = () => {
  return (
    <div className={style["meals-img"]}>
      <img src={mealsImg} alt="A table of delicious foods"></img>
    </div>
  );
};
export default Banner;
