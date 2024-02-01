type CategoryButtonsProps = {
  categories: string[];
  setCategory: (value: string) => void;

}
function CategoryButtons({ categories, setCategory } : CategoryButtonsProps) {
  return (
    <div>
      {
        categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
            }}
          >
            {item.length ? item : '전체' }
          </button>
        ))
      }
    </div>
  );
}

export default CategoryButtons;
