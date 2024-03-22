import React, { useState, useEffect } from 'react';

export const Table = () => {
    const [table, setTable] = useState([]);
    const [currentMatchday, setCurrentMatchday] = useState('');

    useEffect(() => {
        const backendUrl = 'https://la-liga-peach.vercel.app/api/competitions/PD/standings';
        
      
        const localTable = localStorage.getItem('tableData');
        const localMatchday = localStorage.getItem('currentMatchdayForTable');

        if (localTable && localMatchday) {
            setTable(JSON.parse(localTable));
            setCurrentMatchday(JSON.parse(localMatchday));
        } else {
            fetch(backendUrl)
                .then(response => response.json())
                .then(data => {
                    setTable(data.standings[0].table);
                    setCurrentMatchday(data.season.currentMatchday);
                   
                    localStorage.setItem('tableData', JSON.stringify(data.standings[0].table));
                    localStorage.setItem('currentMatchdayForTable', JSON.stringify(data.season.currentMatchday));
                })
                .catch(error => {
                    console.error('Error fetching table:', error);
                });
        }
    }, []);

    const getColor = (position) => {
        if ([1, 2, 3, 4].includes(position)) {
            return "px-4 py-2 text-center text-white font-bold bg-[#004682]";
        } else if (position === 5) {
            return "px-4 py-2 text-center text-white font-bold bg-[#7f0029]";
        } else if (position === 6) {
            return "px-4 py-2 text-center text-white font-bold bg-[#b8860b]";
        } else if ([18, 19, 20].includes(position)) {
            return "px-4 py-2 text-center text-white font-bold bg-[#bd0000]";
        } else {
            return "px-4 py-2 text-center text-black font-bold";
        }
    };

    return (
       
            <div className='flex justify-center overflow-x-auto col-span-2'>
                
                <div className="min-w-full relative   sm:rounded-lg">
                <h2 className='text-black font-bold text-2xl mb-8 lg:mt-5 mt-12'>Clasificación</h2>
                    <table className="w-full text-xs sm:text-sm md:text-base text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-3">#</th>
                                <th className="px-6 py-3">Equipo</th>
                                <th className="px-6 py-3">PTS</th>
                                <th className="px-6 py-3">PJ</th>
                                <th className="px-6 py-3">V</th>
                                <th className="px-6 py-3">E</th>
                                <th className="px-6 py-3">D</th>
                                <th className="px-6 py-3">GA</th>
                                <th className="px-6 py-3">GC</th>
                                <th className="px-6 py-3">DF</th>
                               
                            </tr>
                        </thead>
                        <tbody className='text-black'>
                            {table.map((team, index) => (
                                <tr key={index} className="border-b">
                                    <td className={getColor(team.position)}><p className='text-xs '>{team.position}</p></td>
                                    <td className="px-6 py-2 whitespace-nowrap">
                                        <div className="flex items-center text-xs font-medium ">
                                            <img src={team.team.crest} alt="Escudo" className="w-5 h-5 mr-2"/>
                                            {team.team.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-2 text-center text-xs  font-bold">{team.points}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.playedGames}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.won}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.draw}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.lost}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.goalsFor}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.goalsAgainst}</td>
                                    <td className="px-6 py-2 text-center text-xs ">{team.goalDifference}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
   
    );
};
