import React, { useState, useEffect } from 'react';

export const MatchDayComponent = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {

    const backendUrl = 'http://localhost:3000/api/competitions/PD/matches?matchday=26';

    fetch(backendUrl)
      .then(response => response.json())
      .then(data => {

        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch(error => {
        console.error('Error fetching matches:', error);
      });
  }, []);

  const formatDateAndTime = (utcDate) => {
    const date = new Date(utcDate);
    // Formatear la fecha como DD/MM/YYYY
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    // Formatear la hora como HH:MM
    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    return { formattedDate, formattedTime };
  };

  return (
    <div className='bg-[#00000a] px-4 lg:px-56 py-6'>
      <div className="container">
        <h2 className='text-white font-bold text-2xl mb-8'>RESULTADOS DE LA ÚLTIMA JORNADA</h2>
      </div>
      <div className='grid gap-3 grid-cols-1 xl:grid-cols-5'>
        {matches.map(match => {
          const { formattedDate, formattedTime } = formatDateAndTime(match.utcDate);
          return (
            <div key={match.id}>
              <article className='bg-white min-w-52 border border-l-neutral-50'>
                <div className='flex justify-between bg-[#f7f7f7] px-4 py-2  text-xs font-bold'>
                  <p>{formattedDate}</p>
                  <p>{formattedTime}</p>
                </div>
                <div className='bg-white px-4 py-2 flex justify-between grid-cols-2'>
                  <div className='flex gap-2 items-center'>
                    <p className='text-sm font-semibold'>{match.homeTeam.tla}</p>
                    <img src={match.homeTeam.crest} alt="" className='w-6' />
                    <p className=' text-2xl font-bold'>{match.score.fullTime.home !== null ? match.score.fullTime.home : 'X'} </p> -
                    <p className=' text-2xl font-bold'> {match.score.fullTime.away !== null ? match.score.fullTime.away : 'X'}</p>

                    <img src={match.awayTeam.crest} alt="" className='w-6' />
                    <p className='text-sm font-semibold'>{match.awayTeam.tla}</p>
                  </div>

                 
                </div>
                <div className='px-4 py-2'>
                <p className=' text-[#7735ccf5] font-bold'>#{match.homeTeam.shortName.replace(/\s+/g, '')}{match.awayTeam.shortName.replace(/\s+/g, '')}</p>


                </div>
                <div className='bg-[#ff4b44] flex items-center justify-center py-2'>
                  <p className='text-white font-semibold'>Ver ahora</p>


                </div>
            
           
              </article>
            </div>
          );
        })}
      </div>
    </div>

  );
};
