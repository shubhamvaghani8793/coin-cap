import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Converter from './components/converter/Converter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/converter' element={<Converter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
