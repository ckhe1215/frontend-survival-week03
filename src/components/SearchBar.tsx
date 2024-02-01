type SearchBarProps = {
  setQuery: (value: string) => void;
}

function SearchBar({ setQuery } : SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <label htmlFor="검색">검색</label>
      <input
        type="text"
        placeholder="식당 이름"
        name="검색"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
