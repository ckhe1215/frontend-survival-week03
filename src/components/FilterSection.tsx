import CategoryButtons from './CategoryButtons';
import SearchBar from './SearchBar';

type FilterSectionProps = {
  categories: string[];
  setQuery: (value: string) => void;
  setCategory: (value: string) => void;
}

function FilterSection({ categories, setQuery, setCategory }: FilterSectionProps) {
  return (
    <section>
      <SearchBar setQuery={setQuery} />
      <CategoryButtons setCategory={setCategory} categories={categories} />
    </section>

  );
}

export default FilterSection;
