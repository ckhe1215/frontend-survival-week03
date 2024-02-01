import { Restaurant } from '../types/Restaurant';

type FilteredRestaurantsTableRowProps = {
  restaurant: Restaurant
}

export default function FilteredRestaurantsTableRow({
  restaurant,
}: FilteredRestaurantsTableRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <li key={menu.id}>
              {`${menu.name}(${menu.price.toLocaleString()})원`}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
