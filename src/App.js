import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles/App.css';
import Rockets from './containers/Rockets';
import Header from './components/Header';
import Missions from './components/Missions';
import Profile from './components/Profile';
import { getRocketsItem } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsItem());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
