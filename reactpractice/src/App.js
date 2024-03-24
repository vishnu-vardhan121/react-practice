import logo from './logo.svg';
import './App.css';
import Counter from './components/state/counter';
import EmployesData from './components/axios/users';
import Products from './components/axios/products';
// import MountingPhase from "./components/LifeCycle/mountingPhase";
import UpdatePhase from './components/LifeCycle/updatingPhase';
import UseStateEx1 from './components/functional/hooks/useStateEx1';
import UseStateEx2 from './components/functional/hooks/useStateEx2';
import UseStateEx3 from './components/functional/hooks/useStateEX3';



function App() {
  return (
    <>
    <UseStateEx3/>
    </>
  );
}

export default App;
