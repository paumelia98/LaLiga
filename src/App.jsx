
import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MatchDayComponent } from './components/MatchDayComponent';
import { LastMatchday } from './components/LastMatchday';

import { Navbar } from './components/Navbar'
import Videos from './components/Videos';
import { Footer } from './components/Footer';


function App() {


  return (
    <>
    <Header/>  
      <Navbar/>
        <Hero/> 
      

     <MatchDayComponent/>  
       <LastMatchday/> 
       

      <Videos/>
      <Footer/>
      
    </>
  )
}

export default App
