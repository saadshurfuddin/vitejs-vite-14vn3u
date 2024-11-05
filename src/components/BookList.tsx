// components/BookList.tsx
import React from 'react';
import BookCard from './BookCard'; // Ensure the BookCard is imported

interface Book {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid gap-4">
      {books.length > 0 ? (
        books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      ) : (
        <p className="text-center">No books found</p>
      )}
    </div>
  );
};

export default BookList;
