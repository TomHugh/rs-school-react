import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { setQuery } from '../features/searchQuerySlice';

function SearchBar() {
  const query = useSelector((state: RootState) => state.searchQuery);
  const dispatch = useDispatch();

  const searchInput = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState(query.value);

  const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
      searchInput.current?.blur();
    }
  };

  const handleSearch = () => {
    dispatch(setQuery(searchValue));
  };

  return (
    <div className="bg-gray-600 px-2 flex h-16 items-center">
      <input
        type="text"
        placeholder="Search for movie..."
        ref={searchInput}
        value={searchValue}
        onChange={handleSearchValueChange}
        onKeyDown={handleKeyPress}
      />
      <button className="bg-teal-600 text-white px-4" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
