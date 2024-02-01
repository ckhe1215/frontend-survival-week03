import { Restaurant } from '../types/Restaurant';

const filterRestaurant = (
  restaurants:Restaurant[],
  query:string,
  category:string,
) => {
  const keyword = query.trim();

  const containsKeyword = (restaurant: Restaurant) => (
    restaurant.name.includes(keyword)
  );

  const matchCategory = (restaurant: Restaurant) => (
    category.length ? restaurant.category === category : restaurant
  );

  return restaurants.filter(containsKeyword).filter(matchCategory);
};

export default filterRestaurant;
