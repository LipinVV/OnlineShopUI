import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductCard } from './Components/Product/ProductCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductCard
          title='Fullset Grey Sofa With Pillow' // шаблонные строки, из базы данных по имени
          price={799}
          previewUrl='https://cdn.boydforcongress.com/wp-content/uploads/fabric-sofas_89570.jpg'
          rating={5}
          salesCount={400}
          priceNoDiscount={820}
          discount={3}
          isFavourite={false} />
      </header>
    </div>
  );
}

export default App;

// карточка продукта, стили через САСС/БЭМ
// ТС конфиг
