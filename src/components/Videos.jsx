import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

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

        <section className='bg-white px-40'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow]}
        className="swiperSlide"
      >
            {videos.map((video, index) => (
                <SwiperSlide key={index}>
                    <iframe className='aspect-video w-100'
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
