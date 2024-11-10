import logo from './logo.svg';
import './App.css';
import Viewproduct from './components/Viewproduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/viewall' element={<Viewproduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
