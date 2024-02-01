import { useState } from 'react';
import restaurantsData from '../restaurants.json';
import FilterSection from './components/FilterSection';
import FilteredRestaurantsTable from './components/FilteredRestaurantsTable';
import filterRestaurant from './utils/filterRestaurant';
import getCategories from './utils/getCategories';

export default function App() {
  const { restaurants } = restaurantsData;
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const categories = getCategories(restaurants);

  const filteredRestaurants = filterRestaurant(restaurants, query, category);

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <div>
        <FilterSection categories={categories} setQuery={setQuery} setCategory={setCategory} />
        <FilteredRestaurantsTable restaurants={filteredRestaurants} />
      </div>
    </div>
  );
}
