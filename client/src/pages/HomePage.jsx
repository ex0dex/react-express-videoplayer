import React, { useState, useEffect } from 'react';
import axios from 'axios'
import HomeCard from '../components/HomeCard';

const HomePage = () => {
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        const getVideosData = async()=>{
            const {data} = await axios.get('http://localhost:5000/api/videos')
            setVideos(data)
            console.log(data)
        }
        getVideosData()
    },[])
    return (
        <div>
           {videos.map(video=>{
               return(<HomeCard key={video.id} video={video}/>)
               
           }).reverse()}
        </div>
    );
};

export default HomePage;