import React, { useState, useEffect } from 'react';
import referee from '/src/assets/logos/referee.svg'
export const MatchDayComponent = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const backendUrl = 'https://la-liga-peach.vercel.app/api/competitions/PD/matches?matchday=28';

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
    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    return { formattedDate, formattedTime };
  };

  const getMatchStatus = (status) => {
    if (status === "FINISHED") {
      return <p className='text-white font-semibold text-sm'>FINALIZADO</p>;
    } else if (status === "IN_PLAY") {
      return <p className='text-white font-semibold text-sm'>EN JUEGO</p>;
    } else {
      return <p className='text-white font-semibold text-sm'>AÚN POR JUGAR</p>;
    }
  };


  return (
    <div className='bg-[#ffffff] px-4 lg:px-40 py-6'>
      <div className="container">
        <h2 className='text-black font-bold text-2xl mb-8'>RESULTADOS DE LA ÚLTIMA JORNADA</h2>
      </div>
      <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  2xl:grid-cols-4 '>
        {matches.map(match => {
          const { formattedDate, formattedTime } = formatDateAndTime(match.utcDate);
          return (
            <div key={match.id} className='flex flex-col'>
              <article className='bg-white min-w-52 border flex flex-col justify-between min-h-32' >
                <div>
                  <div className='flex justify-between bg-[#f7f7f7] px-4 py-2 text-xs font-bold'>
                    <p>{formattedDate}</p>
                    <p>{formattedTime}</p>
                  </div>
                  <div className='bg-white px-4 py-2 grid grid-cols-3 '>
                    <div className='flex flex-col col-span-2'>
                      <div className='flex gap-2 items-center  '>
                        <p className='text-sm font-semibold'>{match.homeTeam.tla}</p>
                        <img src={match.homeTeam.crest} alt="" className='w-6' />
                        <p className='text-2xl font-bold'>{match.score.fullTime.home !== null ? match.score.fullTime.home : ' '} - {match.score.fullTime.away !== null ? match.score.fullTime.away : ' '}</p>
                        <img src={match.awayTeam.crest} alt="" className='w-6' />
                        <p className='text-sm font-semibold'>{match.awayTeam.tla}</p>
                      </div>

                      <div className=' py-2'>
                          <p className='text-[#7735ccf5] font-bold'>#{match.homeTeam.shortName.replace(/\s+/g, '')}{match.awayTeam.shortName.replace(/\s+/g, '')}</p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <hr />
                      <div className='flex flex-col'>
                      <div className='flex gap-1 items-center'>
                        <img src={referee} alt="" className='w-2' />
                        {match.referees.length > 0 ? (
                          <p className='font-bold text-xs'>{match.referees[0].name}</p>
                        ) : (
                          <p className='font-bold text-xs'>Sin asignar</p>
                        )}
                      </div>

                     
                      </div>
                     
                      
                     
                    </div>
                
                   
                    
                  </div>
                 
                </div>
                <div className='bg-[#ff4b44] flex items-center justify-center py-1'>
                  {getMatchStatus(match.status)}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};
