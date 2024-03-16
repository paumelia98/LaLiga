
import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MatchDayComponent } from './components/MatchDayComponent';
import { LastMatchday } from './components/LastMatchday';

import { Navbar } from './components/Navbar'
import { Table } from './components/Table';

function App() {


  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>


      <MatchDayComponent/>
      <LastMatchday/>
      <Table/>
      
    </>
  )
}

export default App
