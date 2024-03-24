
import './App.css'
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MatchDayComponent } from './components/MatchDayComponent';
import { LastMatchday } from './components/LastMatchday';

import { Navbar } from './components/Navbar'
import Videos from './components/Videos';

import {  ModalFirst } from './components/ModalFirst';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { Built } from './components/Built';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

 
      {isModalOpen && <ModalFirst  onClose={handleCloseModal} />}
      <div className={isModalOpen ? 'blur' : ''}> 
         <Header />
        <Navbar /> 
         <Hero /> 
         <MatchDayComponent />
         <LastMatchday /> 
         <Videos /> 
         <Footer/> 
         <Built/>
      </div> 
    </>
  );
}

export default App;
