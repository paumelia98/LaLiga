import React, { useState, useEffect, useRef } from 'react';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const carouselRef = useRef(null);



    useEffect(() => {
        const apiKey = 'AIzaSyD78DRk-iHfM6392jbRzKYWLjIfmmmnQvE';
        const channelId = 'UCK-mxP4hLap1t3dp4bPbSBg';
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=100&type=video&key=${apiKey}&q=resumen`;

        const fetchVideos = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const filteredVideos = data.items.filter(video => video.snippet.title.toLowerCase().includes('laliga ea'));
                setVideos(filteredVideos);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchVideos();
    }, []);

    const scroll = (scrollOffset) => {
        carouselRef.current.scrollLeft += scrollOffset;
    };

    return (
        <section className='px-4 lg:px-40 mt-16  ' id='videos'>
            <h2 className='text-black font-bold text-2xl mb-8  pt-12 border-t-2 border-[#e4e4e46b]'> RESÚMENES DE LA ÚLTIMA JORNADA</h2>
            <div className="flex overflow-x-auto" ref={carouselRef} style={{ scrollbarWidth: 'none' }}>
                {videos.map((video, index) => (
                    <div key={index} className="mr-5" style={{ minWidth: '400px' }}>
                        <iframe
                            className="w-full hover:scale-105"
                            style={{ height: '250px',transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }}
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>

            <div className='flex justify-center mt-[20px]'>
                <button className='hover:scale-110' aria-label="Botón hacia la izquierda"  style={{ marginRight: '10px',transition: "all 0.3s cubic-bezier(0,0,0.5,1)" }}><svg width="32px" height="32px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="5" stroke="#000000" fill="none"><polyline points="45.14 6.53 19.88 33.16 45.14 57.42"/></svg></button>
                <button  className='hover:scale-110' aria-label="Botón hacia la derecha" style={{transition: "all 0.3s cubic-bezier(0,0,0.5,1)"}} onClick={() => scroll(300)}><svg width="32px" height="32px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="5" stroke="#000000" fill="none"><polyline points="18.86 57.47 44.12 30.84 18.86 6.58"/></svg></button>
            </div>
        </section>
    );
};

export default Videos;