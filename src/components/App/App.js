import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import RecentWorks from '../RecentWorks/RecentWorks';
import Footer from '../Footer/Footer';
import Static from '../Static/Static';
import Reviews from '../Reviews/Reviews';
import Clients from '../Clients/Clients';
import Start from '../Start/Start';

const App = () => {
  return (
    <div className='app'>
   
              <Header />
              <AboutUs />
              <RecentWorks />
              <Static/>
              <Reviews/>
              <Clients/>
              <Start/>
              <Footer />
      
    </div>
  );
};
export default App;


