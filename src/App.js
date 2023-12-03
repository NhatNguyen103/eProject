import './App.css';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Categories from './Routes/Categories';
import Gallery from './Routes/Gallery';
import Contact from './Routes/Contact';
import {Routes, Route } from 'react-router-dom';
import FanDetail from './Components/FanDetail';
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import CheckoutPage from './Routes/CheckOutPage';
import Contact2 from './Routes/Contact2';
function App() {
  return (
    
    <div className='App'>
   

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp /> } />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Categories/:id' element={<FanDetail/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Contact2' element={<Contact2/>}/>

      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;
