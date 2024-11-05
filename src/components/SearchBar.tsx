import React from 'react';

interface SearchBarProps {
  query: string;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: React.FormEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onQueryChange, onSearch }) => (
  <form onSubmit={onSearch} className="flex justify-center mb-6">
    <input
      type="text"
      value={query}
      onChange={onQueryChange}
      placeholder="Search for books..."
      className="p-2 border border-gray-300 rounded-l"
    />
    <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
      Search
    </button>
  </form>
);

export default SearchBar;
