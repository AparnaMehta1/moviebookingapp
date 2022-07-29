import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'; 
import Login from './components/login/Login';
import './App.css';


function App() {
  return (
    <BrowserRouter>
   <div className='main-div'>
    
      <Routes>
        <Route  path="/" element={ <Landing /> }/>
        <Route  path="/login" element={ <Login /> }/>

      </Routes>
      
   </div>
   </BrowserRouter>
  );
}

export default App;
