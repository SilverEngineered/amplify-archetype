import Home from './components/home';
import Register from './register.js';
import AddListing from './components/addlisting';
import MyListing from './components/mylistings';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SmoothScroll from 'smooth-scroll';
import './App.css';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = ({signOut, user}) => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="addlisting" element={<AddListing />} />
        <Route path="mylistings" element={<MyListing />} />
      </Routes>
    </BrowserRouter>

  );
};
export default App;
