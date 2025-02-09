import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import Converter from './components/converter/Converter';
import GoalTracker from './components/goaltracker/GoalTracker';
import Terms from './components/terms/Terms';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/converter' element={<Converter />} />
          <Route path='/goal-tracker' element={<GoalTracker />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
