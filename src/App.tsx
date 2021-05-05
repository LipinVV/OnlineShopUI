import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductCard } from './Components/Product/ProductCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard
          title='productTitle'
          price={100}
          previewUrl='any URL...'
          rating={5}
          salesCount={500}
          discount={15}
          isFavourite={false} />
      </header>
    </div>
  );
}

export default App;

// карточка продукта, стили через САСС/БЭМ
// ТС конфиг
