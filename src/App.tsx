import './App.scss';
import { ProductCard } from './Components/Product/ProductCard'

function App() {
  // array with goods -> categories
  // merge changes -> new branch
  // router wrapper
  // 2 components:
  // 1) ../category -> shoplist (goods from Array.map)
  // ...product -> productcard ~ individual card with descriptions
  //... shoplist -> goods & button 'buy'

  return (
    <div className="App">
      <header className="App__header">
        <ProductCard
          title='Fullset Grey Sofa With Pillow' // шаблонные строки, из базы данных по имени
          price={799}
          discount={13}
          previewUrl='https://cdn.boydforcongress.com/wp-content/uploads/fabric-sofas_89570.jpg'
          rating={5}
          salesCount={400}
          isFavourite={false} />
      </header>
    </div>
  );
}

export default App;
