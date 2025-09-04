import './App.css';

import Card from './component/Card';

function App() {
  return (
    <div className="App">
      
    <p><Card name="Dave" age="22" role="Software Engineer" isActive={true}/></p>
    <p><Card name="Vicki" age="32" role="Data analyst" isActive={false}/></p>
    <p><Card name="Grace" age="45" role="Trainer" isActive={true}/></p>
     
    </div>
  );
}

export default App;
