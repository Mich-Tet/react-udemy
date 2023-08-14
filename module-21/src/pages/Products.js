import React from 'react';
import { Link } from 'react-router-dom';
const Products = () => {
  const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
  ];
  return (
    <div>
      <h1>The Products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        Go to <Link to={'/'}>Home</Link>
      </p>
    </div>
  );
};

export default Products;
