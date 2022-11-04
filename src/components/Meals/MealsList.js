import style from "./MealsList.module.css";
import MealsItem from "./MealsItem/MealsItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const MealsList = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newp-25379-default-rtdb.firebaseio.com/meals.json"
        );
        if (!response.ok)
          throw new Error("Something went wrong! Please try again.");
        const data = await response.json();
        const loadedMeals = Object.values(data);
        setMealsData(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setHttpError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  const meals = mealsData.map((item) => (
    <MealsItem data={item} key={item.id} />
  ));
  return (
    <>
      {isLoading && <CircleLoader className={style.spinner} color="#36d7b7" />}
      {httpError && <p className={style["error-msg"]}>{httpError}</p>}
      {!isLoading && !httpError && (
        <section className={style.meals}>
          <Card>
            <ul className={style["meals-list"]}>{meals}</ul>
          </Card>
        </section>
      )}
    </>
  );
};
export default MealsList;
