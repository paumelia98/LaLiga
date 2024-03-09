import React, { useState, useEffect } from 'react'


export const Header = () => {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
      // URL del servidor backend que actúa como proxy
      const backendUrl = 'https://la-liga-peach.vercel.app/api/competitions/PD/teams';

      fetch(backendUrl)
          .then(response => response.json())
          .then(data => {
              // Asumiendo que 'data' es el array de equipos que esperas
              setTeams(data.teams);
            
          })
          .catch(error => {
              console.error('Error fetching teams:', error);
          });
  }, []);


 
    return (
        <header className='md:flex items-center justify-between bg-[#f0f0f0] w-full h-12 lg:px-56 p-2 hidden'>
           {teams.map((team, index) => (
                <li key={index} className='list-none'>
                    <img className='w-7 hover:scale-150' src={team.crest} alt="logo" />
                </li>
            ))} 
        </header>
    );
}
