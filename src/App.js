import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Nabar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';

function App() {
  return (
   <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
          <Footer />
      </BrowserRouter>
   </>
  );
}

export default App;
