// App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar'; // Import SearchBar component

interface Book {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      setBooks(response.data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Book Finder</h1>
      <SearchBar
        query={query}
        onQueryChange={(e) => setQuery(e.target.value)}
        onSearch={searchBooks}
      />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default App;
