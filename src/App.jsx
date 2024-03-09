
import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MatchDayComponent } from './components/MatchDayComponent';


import { Navbar } from './components/Navbar'

function App() {


  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>

      <MatchDayComponent/>
      
    </>
  )
}

export default App
