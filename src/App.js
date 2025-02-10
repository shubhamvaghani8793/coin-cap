import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Converter from './components/converter/Converter';
import GoalTracker from './components/goaltracker/GoalTracker';
import Terms from './components/terms/Terms';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/converter' element={<Converter />} />
          <Route path='/goal-tracker' element={<GoalTracker />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
