
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './pages/about';
import Home from './pages/home';
import MenuList from './pages/MenuList';
import './styles/style.scss';
import Footer from './components/footer';
import BookingTble from './pages/BookingTable';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index  exact Component={Home}/>
            <Route path='/About'  exact Component={About}/>
            <Route path='/Booking'  exact Component={BookingTble}/>
            <Route path='/Manulist'  exact Component={MenuList}/>
          </Routes>
          <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
