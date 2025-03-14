import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions';
import NavBar from '../components/NavBar';


const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: 499 },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 399 },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho", price: 299 },
  { id: 4, title: "Deep Work", author: "Cal Newport", price: 599 },
  { id: 5, title: "Ikigai", author: "Héctor García", price: 349 }
];

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
    alert(`${book.title} added to cart!`);
  };

  return (
    <div>
      <NavBar />
      <h1>Book Store</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {books.map(book => (
          <div key={book.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '4px', width: '200px' }}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: ₹{book.price}</p>
            <button onClick={() => handleAddToCart(book)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;