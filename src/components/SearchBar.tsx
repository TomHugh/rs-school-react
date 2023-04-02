import { useState, useEffect } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('searchValue');
    if (storedValue !== null) {
      setSearchValue(storedValue);
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    localStorage.setItem('searchValue', value);
  };

  return (
    <div className="bg-gray-600 px-2 flex h-16 items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button
        className="bg-teal-600 text-white px-4"
        onClick={() => console.log('Search for', searchValue)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
