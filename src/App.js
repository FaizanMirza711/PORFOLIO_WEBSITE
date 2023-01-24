import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Productlist from './components/Portfoliolist/Productlist';
// import Particlesbackground from './components/Particlesbackground';
import Contact from './components/contact/contact';

function App() {
  return (
   <>
  {/* <Particlesbackground/> */}
    <Navbar/>
    <Header/>
    <Aboutme/>
    <Productlist/>
    <Contact/>
    
   </>
  );
}

export default App;
