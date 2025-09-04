import './App.css'
import ItemCard from './components/itemCard'
import itemsData from './itemsData.json'

function App() {
  return (
    <div className='App'>
      <main>
        <h1>Unicode Characters</h1>
        <div className='items-grid'>
          {itemsData.map((item) => (
            <ItemCard
            key={item.id}
            symbol={item.symbol}
            name={item.name}
            unicodeVal={item.unicodeVal}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
 

export default App;
