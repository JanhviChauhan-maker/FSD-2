import React from 'react';

// Child Component
function ProductCard({ title, price, rating, image }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '10px', borderRadius: '8px' }}>
      <img src={image} alt={title} style={{ width: '100px' }} />
      <h2>{title}</h2>
      <p>Price: ₹{price}</p>
      <p>Rating: ⭐ {rating}</p>
    </div>
  );
}

// Parent Component
export default function ProductList() {
  const products = [
    { id: 1, title: 'iPhone 15', price: 79999, rating: 4.8, image: 'a.png' },
    { id: 2, title: 'Laptop', price: 55999, rating: 4.5, image: 'a.png' },
    { id: 3, title: 'Headphones', price: 2999, rating: 4.2, image: 'a.png' },
  ];

  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          title={product.title} 
          price={product.price} 
          rating={product.rating} 
          image={product.image} 
        />
      ))}
    </div>
  );
}
