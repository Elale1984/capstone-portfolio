import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Home  from './pages/home/Home'
import Features from './pages/features/Features'
import ContactUs from './pages/contact-me/ContactUs'
import RoomzIO from './pages/overview/Overview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/overview' element={<RoomzIO/>}/>
          <Route path='/features' element={<Features />}/>
          <Route path='/contact-me' element={<ContactUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
