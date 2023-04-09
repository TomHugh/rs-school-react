import { useState, useRef } from 'react';

interface Props {
  setQuery: (searchValue: string) => void;
}

function SearchBar(props: Props) {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchValue);
      searchInput.current?.blur();
    }
  };

  const handleSearch = (searchValue: string) => {
    localStorage.setItem('searchValue', searchValue);
    props.setQuery(searchValue);
  };

  return (
    <div className="bg-gray-600 px-2 flex h-16 items-center">
      <input
        type="text"
        placeholder="Search for movie..."
        ref={searchInput}
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      <button className="bg-teal-600 text-white px-4" onClick={() => handleSearch(searchValue)}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
