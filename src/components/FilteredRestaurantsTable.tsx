import { Restaurant } from '../types/Restaurant';
import FilteredRestaurantsTableHeader from './FilteredRestaurantsTableHeader';
import FilteredRestaurantsTableRow from './FilteredRestaurantsTableRow';

type FilteredRestaurantsTableProps = {
  restaurants: Restaurant[]
}

export default function FilteredRestaurantsTable({ restaurants }: FilteredRestaurantsTableProps) {
  return (
    <table>
      <FilteredRestaurantsTableHeader />
      <tbody>
        {
          restaurants.map((restaurant) => (
            <FilteredRestaurantsTableRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))
        }
      </tbody>
    </table>
  );
}
