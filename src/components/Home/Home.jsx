import Hero from "../Hero/Hero";
import Categories from '../Categories/Categories'
import FavouriteFoods from '../FavouriteFoods/FavouriteFood'

const Home = () => {
  return (
    <div>
      <Hero />
      <FavouriteFoods />
      <Categories />
    </div>
  );
};

export default Home;
