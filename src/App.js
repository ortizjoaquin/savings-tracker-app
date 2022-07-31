// import Header from './components/Header.jsx';
// import Indicator from './components/shared/Indicator'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Saving from './pages/Saving.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/saving' element={<Saving />} />
        <Route path='/profile' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Navbar />
    </Router>
    {/* <Header />
    <div className='container'>
      <Indicator />
    </div> */}
    </>
  );
}

export default App;
