import logo from './logo.svg';
import './App.css';
import Counter from './components/state/counter';
import EmployesData from './components/axios/users';
import Products from './components/axios/products';

function App() {
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;
