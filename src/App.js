import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Volenteers from './components/Volenteers/Volenteers';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>

     <Route path='/' element={<Main/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/volenteers' element={<Volenteers/>}></Route>
     </Routes>
       {/* <Home></Home> */}

       
    </div>
  );
}

export default App;
