// components/BookCard.tsx
import React from 'react';

interface Book {
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold">{book.title}</h2>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p>First Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
};

export default BookCard;
