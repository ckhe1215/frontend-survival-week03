import { Restaurant } from '../types/Restaurant';

const getCategories = (restaurants: Restaurant[]) => {
  const categories = restaurants.reduce(
    (acc:string[], cur) => (acc.includes(cur.category) ? acc : [...acc, cur.category])
    , [],
  );
  return ['', ...categories];
};

export default getCategories;
