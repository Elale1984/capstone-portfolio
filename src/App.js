import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Home  from './pages/home/Home'
import Features from './pages/features/Features'
import ContactMe from './pages/contact-me/ContactMe'
import RoomzIO from './pages/roomz-io/RoomzIO';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/roomz-io' element={<RoomzIO/>}/>
          <Route path='/features' element={<Features />}/>
          <Route path='/contact-me' element={<ContactMe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
