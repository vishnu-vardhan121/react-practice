import logo from './logo.svg';
import './App.css';
import Counter from './components/state/counter';
import EmployesData from './components/axios/users';

function App() {
  return (
    <div className="App">
      <EmployesData/>
    </div>
  );
}

export default App;
