import './App.css'
import { ShopItemClass } from './components/ShopItem';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className="highlight-overlay"></div>
      </div>
      <div className="window">
        <ShopItemClass item={ ShopItemClass.ShopItem }/>
      </div>
    </div>
  );
}

export default App
