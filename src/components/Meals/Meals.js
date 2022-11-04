import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsList />
    </Fragment>
  );
};
export default Meals;
