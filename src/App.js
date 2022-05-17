import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
function App() {

  return (
    <div >
   <BrowserRouter>
  <Routes>
  <Route path="/" exact element={<Search/>}></Route>
    <Route path="/search" exact element={<Register/>}>

    </Route>
   
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;