import React, { useState, useEffect } from 'react';

export const Table = () => {
    const [table, setTable] = useState([]);
    const [currentMatchday, setCurrentMatchday] = useState('');

    useEffect(() => {
        const backendUrl = 'https://la-liga-peach.vercel.app/api/competitions/PD/standings';

        fetch(backendUrl)
            .then(response => response.json())
            .then(data => {
                setTable(data.standings[0].table);
                console.log(data.season.currentMatchday)
                setCurrentMatchday (data.season.currentMatchday);
            })
            .catch(error => {
                console.error('Error fetching table:', error);
            });
    }, []);

    const getColor = (position) => {
        if ([1, 2, 3, 4].includes(position)) {
            return "sticky left-0 z-10 border px-4 text-center text-white font-bold bg-[#004682]";
        } else if (position === 5) {
            return "sticky left-0 z-10 border px-4 text-center text-white font-bold bg-[#7f0029]";
        } else if (position === 6) {
            return "sticky left-0 z-10 border px-4 text-center text-white font-bold bg-[#b8860b]";
        } else if ([18, 19, 20].includes(position)) {
            return "sticky left-0 z-10 border px-4 text-center text-white font-bold bg-[#bd0000]";
        } else {
            return "sticky left-0 z-10 border px-4 text-center text-black font-bold";
        }
    };

    return (
        <section className='bg-[#ffffff] py-8 '> 
            <h2 className='text-black font-bold text-2xl mb-8 pt-6 text-center '>CLASIFICACIÓN {currentMatchday}</h2>
            <div className='flex justify-center overflow-auto'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="table-auto bg-white text-[13px] whitespace-nowrap">
                        <thead className="bg-[#f0efef] text-black py-4 sticky top-0 z-10">
                            <tr>
                                <th className="sticky left-0 z-10 px-4 bg-[#f0efef]">#</th>
                                <th className="sticky left-16 z-10 px-4 bg-[#f0efef]">Equipo</th>
                                <th className="px-4">PJ</th>
                                <th className="px-4">V</th>
                                <th className="px-4">E</th>
                                <th className="px-4">D</th>
                                <th className="px-4">GA</th>
                                <th className="px-4">GC</th>
                                <th className="px-4">DF</th>
                                <th className="px-4">PTS</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {table.map((team, index) => (
                                <tr className="hover:bg-gray-100" key={index}>
                                    <td className={getColor(team.position)}> <p className=' text-xs'>{team.position}</p></td>
                                    <td className="sticky left-16 z-10 border px-4 bg-white">
                                        <div className="flex items-center space-x-3">
                                            <img src={team.team.crest} alt="Escudo" className="w-4 h-4 m-2"/>
                                            {team.team.name}
                                        </div>
                                    </td>
                                    <td className="border px-4 text-center">{team.playedGames}</td>
                                    <td className="border px-4 text-center">{team.won}</td>
                                    <td className="border px-4 text-center">{team.draw}</td>
                                    <td className="border px-4 text-center">{team.lost}</td>
                                    <td className="border px-4 text-center">{team.goalsFor}</td>
                                    <td className="border px-4 text-center">{team.goalsAgainst}</td>
                                    <td className="border px-4 text-center">{team.goalDifference}</td>
                                    <td className="border px-4 text-center font-bold">{team.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
