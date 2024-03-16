import React, { useState, useEffect } from 'react';
import { Table } from '/src/components/Table';

export const LastMatchday = () => {
  const [currentMatchday, setCurrentMatchday] = useState(null);
  const [matches, setMatches] = useState({});
  const totalMatchdays = 38;

  useEffect(() => {
    const fetchMatchesForMatchday = (matchday) => {
      fetch(`https://la-liga-peach.vercel.app/api/competitions/PD/matches?matchday=${matchday}`)
        .then(response => response.json()) // Primero, convertimos la respuesta a JSON.
        .then(data => {
          setMatches(prev => ({ ...prev, [matchday]: data.matches })); // Luego, actualizamos el estado con los partidos.

          if (!currentMatchday) {
            setCurrentMatchday(matchday); // Si no hay una jornada actual definida, la establecemos.
          }
        })
        .catch(error => console.error('Error fetching matches:', error)); // Si hay algún error, lo capturamos aquí.
    };

    fetchMatchesForMatchday(currentMatchday || 1); // Iniciamos la carga de los partidos para la jornada actual o la primera jornada si no está definida.
  }, [currentMatchday]); 

  const handleChangeMatchday = (event) => {
    const selectedMatchday = parseInt(event.target.value);
    setCurrentMatchday(selectedMatchday); // Actualizamos la jornada actual basada en la selección del usuario.
  };



  const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit'
    
    }).replace(/\/(\d{2})$/, ''); // Eliminar el año y la barra antes del año
    
   
    return `${formattedDate}`; // Devuelve la fecha y hora en el formato deseado
  };

  const formatTime = (utcDate) => {
    const date = new Date(utcDate);
    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
   
    return `${formattedTime}`; // Devuelve la fecha y hora en el formato deseado
  };

 


  return (

   <section className='bg-white px-4 lg:px-40'>

<h2 className='text-black font-bold text-2xl mb-8 pt-6'>PARTIDOS 2023-2024</h2>
    <div className='grid grid-cols-1 2xl:grid-cols-2 gap-2 h-100 '>
    

   
    <div>
      <select
        className=" text-center w-full  py-2 bg-gray-900 text-white  "
        value={currentMatchday || ''}
        onChange={handleChangeMatchday}
      >
        {Array.from({ length: totalMatchdays }, (_, index) => (
          <option key={index} value={index + 1}>Jornada {index + 1}</option>
        ))}
      </select>

      {currentMatchday ? (
        <div className="mt-0 bg-[#ffffff] p-1 w-auto "  style={{
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        }}>
      
          {matches[currentMatchday] ? (
            
            matches[currentMatchday].map((match, matchIndex) => (
              
              <div key={matchIndex} className="  items-center lg:mx-2 mx-1 grid lg:grid-cols-12 grid-cols-6 lg:text-sm text-sm   border-b border-t-gray-400 pb-2 pt-2">
                <div className='flex flex-col text-xs text-[#858585] border-r mr-2 items-center'>
                <span>{formatDate(match.utcDate)}</span>
                <span>{formatTime(match.utcDate)}</span>
                </div>
                <div className='flex flex-col lg:col-span-10 col-span-4 gap-2 ms-3'>
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
