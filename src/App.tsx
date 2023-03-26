import restaurantData from "../restaurants.json"
import "./styles.css"

export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <div>
        <label htmlFor="search-bar" className="paddingRight">검색</label>
        <input type="text" id="search-bar" placeholder="식당 이름"/>
        <ul className="buttonList">
          <li><button type="button">전체</button></li>
          <li><button type="button">중식</button></li>
          <li><button type="button">한식</button></li>
          <li><button type="button">일식</button></li>
        </ul>
      </div>
      <table>
        <thead>
          <th className="paddingInline">식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </thead>
        <tbody>
          {restaurantData.restaurants.map((item) =>
            <tr>
              <td>
                {item.name}
              </td>
              <td>
                {item.category}
              </td>
              <td>
                <ul>
                  {
                    item.menu.map((menu) =>
                      <li>{menu.name + "(" + menu.price.toLocaleString('ko-KR') +  "원)"}</li>
                    )
                  }
                </ul>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
