

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Videos = () => {
    const [videos, setVideos] = useState([]);

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
    return (
        <section className=' px-4 lg:px-40 mt-16 '>
            <h2 className='text-black font-bold text-2xl mb-8 pt-6'>NO TE PIERDAS LOS RESUMENES DE LA ÚLTIMA JORNADA</h2>
          
            <Swiper
                breakpoints={{
                    
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
             
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
      
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1424: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {videos.map((video, index) => (
                    <SwiperSlide key={index} className='cursor-grab active:cursor-grabbing'>
                        <iframe
                            className='video-frame'
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Videos;