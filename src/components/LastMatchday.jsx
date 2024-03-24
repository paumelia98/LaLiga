import React, { useState, useEffect } from 'react';
import { Table } from '/src/components/Table';

export const LastMatchday = () => {
  const [currentMatchday, setCurrentMatchday] = useState(null);
  const [matches, setMatches] = useState({});
  const totalMatchdays = 38;

  useEffect(() => {
    const fetchMatchesForMatchday = (matchday) => {
      const localMatches = localStorage.getItem(`matchesMatchday${matchday}`);
      if (localMatches) {
        setMatches(prev => ({ ...prev, [matchday]: JSON.parse(localMatches) }));
      } else {
        fetch(`https://la-liga-pau.vercel.app/api/competitions/PD/matches?matchday=${matchday}`)
          .then(response => response.json())
          .then(data => {
            setMatches(prev => ({ ...prev, [matchday]: data.matches }));
            localStorage.setItem(`matchesMatchday${matchday}`, JSON.stringify(data.matches));
            if (!currentMatchday) {
              setCurrentMatchday(matchday);
            }
          })
          .catch(error => console.error('Error fetching matches:', error));
      }
    };

    const localCurrentMatchday = localStorage.getItem('currentMatchday');
    if (localCurrentMatchday) {
      setCurrentMatchday(JSON.parse(localCurrentMatchday));
    } else {

      setCurrentMatchday(1);
      localStorage.setItem('currentMatchday', JSON.stringify(1));
    }

    fetchMatchesForMatchday(currentMatchday || 1);
  }, [currentMatchday]);

  const handleChangeMatchday = (event) => {
    const selectedMatchday = parseInt(event.target.value);
    setCurrentMatchday(selectedMatchday);
    localStorage.setItem('currentMatchday', JSON.stringify(selectedMatchday));
    if (!matches[selectedMatchday]) {
      fetchMatchesForMatchday(selectedMatchday);
    }
  };


  const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit'
    
    }).replace(/\/(\d{2})$/, ''); 
    
   
    return `${formattedDate}`; 
  };

  const formatTime = (utcDate) => {
    const date = new Date(utcDate);
    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
   
    return `${formattedTime}`;
  };

 


  return (

   <section className='bg-white px-4 lg:px-40 lg:mt-12  lg:mb-20 ' id='resultados'>


    <div className='grid grid-cols-1 2xl:grid-cols-3  lg:gap-12 h-100  '>
    

   
    <div className='col-span-1 '>
    <h2 className='text-black font-bold text-2xl mb-8 pt-6'>PARTIDOS 2023-2024</h2>
    <label htmlFor="matchdaySelect" className="  sr-only">Selecciona una jornada</label>

      <select
      id="matchdaySelect"
        className=" text-center w-full  py-2 bg-gray-900 text-white  "
        value={currentMatchday || ''}
        onChange={handleChangeMatchday}
      >
        {Array.from({ length: totalMatchdays }, (_, index) => (
          <option key={index} value={index + 1}>Jornada {index + 1}</option>
        ))}
      </select>

      {currentMatchday ? (
        <div className="mt-0 bg-[#ffffff] p-1 w-auto pb-16 pt-6 "  style={{
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        }}>
      
          {matches[currentMatchday] ? (
            
            matches[currentMatchday].map((match, matchIndex) => (
              
              <div key={matchIndex} className="  items-center lg:mx-2 mx-1 grid lg:grid-cols-10 grid-cols-6 lg:text-sm text-sm   border-b border-t-gray-400 pb-2 pt-2">
                <div className='flex flex-col text-xs text-[#858585] border-r mr-2 items-center'>
                <span>{formatDate(match.utcDate)}</span>
                <span>{formatTime(match.utcDate)}</span>
                </div>
                <div className='flex flex-col lg:col-span-8 col-span-4 gap-2 ms-3'>
                  <div className='flex gap-2 font-medium'>
                    <img src={match.homeTeam.crest} alt="" className='w-4 h-4' />
                    <span >{match.homeTeam.name}</span>
                  </div>
                  <div className='flex gap-2  font-medium  '>
                    <img src={match.awayTeam.crest} alt="" className='w-4 h-4' />
                    <span >{match.awayTeam.name}</span>
                  </div>
             
                </div>
                <div className='flex flex-col items-center justify-center font-semibold'>
                  <span>{match.score.fullTime.home}</span>
                  <span>{match.score.fullTime.away}</span>   
                
                </div>
              
         
              </div>
            ))
          ) : (
            <p className="text-center">Cargando partidos...</p>
          )}
        </div>
      ) : (
        <p className="text-center text-white">Cargando jornada actual...</p>
      )}
    </div>
    
    <Table/>
    </div>
    </section>
  );
};
