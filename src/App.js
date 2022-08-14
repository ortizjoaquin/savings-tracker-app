// import Header from './components/Header.jsx';
// import Indicator from './components/shared/Indicator'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Saving from './pages/Saving.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
        {/* <Route path='/saving' element={<PrivateRoute />}> */}
          <Route path='/saving' element={<Saving />} />
        {/* </Route> */}
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Navbar />
    </Router>
    {/* <Header />
    <div className='container'>
      <Indicator />
    </div> */}
    <ToastContainer />
    </>
  );
}

export default App;
