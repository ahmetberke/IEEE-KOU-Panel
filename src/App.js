import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Announcements from './pages/Announcements';
import Contents from './pages/Contents';
import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='Content'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/announcements' element={<Announcements/>} />
            <Route path='/contents' element={<Contents/>} />
            <Route path='/events' element={<Events/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
