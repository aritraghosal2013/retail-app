import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './AddItem';
import './App.css';
import ItemList from './ItemList';

function App() {
  return (
   <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/items" element={<ItemList/>} />
          <Route path="/addItem" element={<AddItem/>} />
        </Routes>
    </BrowserRouter>
      </header>
    </div>
    
    
  );
}

export default App;
