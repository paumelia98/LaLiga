import React, { useState, useEffect } from 'react';

export const LastMatchday = () => {
  const [currentMatchday, setCurrentMatchday] = useState(null);
  const [matches, setMatches] = useState({});
  const totalMatchdays = 38; 

  useEffect(() => {
    const fetchMatchesForMatchday = async (matchday) => {
      try {
        const response = await fetch(`https://la-liga-peach.vercel.app/api/competitions/PD/matches?matchday=${matchday}`);
        const data = await response.json();
        setMatches(prev => ({ ...prev, [matchday]: data.matches }));

        if (!currentMatchday) {
          setCurrentMatchday(matchday);
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

 
    fetchMatchesForMatchday(currentMatchday || 1);
  }, [currentMatchday]);

  const handleChangeMatchday = (event) => {
    const selectedMatchday = parseInt(event.target.value);
    setCurrentMatchday(selectedMatchday);
  };

  return (
    <div className="container mx-auto">
      <select
        className="block w-full px-4 py-2 mb-4 bg-gray-900 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
        value={currentMatchday || ''}
        onChange={handleChangeMatchday}
      >
        {Array.from({ length: totalMatchdays }, (_, index) => (
          <option key={index} value={index + 1}>Jornada {index + 1}</option>
        ))}
      </select>

      {currentMatchday ? (
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-4">Jornada {currentMatchday}</h2>
          {matches[currentMatchday] ? (
            matches[currentMatchday].map((match, matchIndex) => (
              <div key={matchIndex} className="flex justify-between items-center w-full max-w-lg p-4 bg-gray-700 rounded-lg mb-2">
                <span className="font-medium">{match.homeTeam.name}</span>
                <span className="text-xs sm:text-base bg-gray-800 px-2 py-1 rounded">{match.score.fullTime.home} - {match.score.fullTime.away}</span>
                <span className="font-medium">{match.awayTeam.name}</span>
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
  );
};
