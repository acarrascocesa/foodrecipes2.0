import { useState } from "react";
import classes from "./hero.module.css";
import axios from "axios";
import { useEffect } from "react";
import food1 from "../../assets/food2.jpg";

const Hero = () => {
  const URL1 =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";

  const [chickenRecipe, setChickenRecipe] = useState("");
  const [burguerRecipe, setBurguerRecipe] = useState("");

  useEffect(() => {
    axios
      .get(URL1)
      .then((res) => setChickenRecipe(res.data.meals[1]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(URL1)
      .then((res) => setBurguerRecipe(res.data.meals[3]))
      .catch((error) => console.log(error));
  }, []);

  console.log(chickenRecipe);
  console.log(burguerRecipe);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2>
            Are you tired of eat <br />
            the same meals?
          </h2>
          <h5>Do you want to try new recipes?</h5>
          <p className={classes.firstDesc}>
            You've come to the right place for some delicious recipes
          </p>
          <p className={classes.secondDesc}>Just see what we have for you</p>
          <div className={classes.buttons}>
            <button>Get Started</button>
            <button>Explore Recipes</button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={food1} alt="" />
          <div className={classes.chickenMeal}>
            <div className={classes.imgContainer}>
              <img src={chickenRecipe?.strMealThumb} />
            </div>
            <h5>{chickenRecipe?.strMeal}</h5>
          </div>
          <div className={classes.burgerMeal}>
            <div className={classes.imgContainer}>
              <img src={burguerRecipe?.strMealThumb} />
            </div>
            <h5>{burguerRecipe?.strMeal}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
