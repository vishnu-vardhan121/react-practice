import logo from './logo.svg';
import './App.css';
import Counter from './components/state/counter';
import EmployesData from './components/axios/users';
import Products from './components/axios/products';
// import MountingPhase from "./components/LifeCycle/mountingPhase";
import UpdatePhase from './components/LifeCycle/updatingPhase';



function App() {
  return (
    <>
    <UpdatePhase/>
    </>
  );
}

export default App;
