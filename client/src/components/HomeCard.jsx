import React from 'react';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';

const HomeCard = ({ video }) => {
    return (
        <div>
            <div>
               <video style={{
                   width:'480px', height:'480px'
               }} src={'http://localhost:5000/'+video.video} controls></video>
              
            </div>

            <div>
                <h2>Title: {video.title}</h2>
            </div>

            <section>
                <p>
                    description: {video.description}
                </p>
            </section>
            <Link to={"/create/"}>
            <button>Add Video</button>
            </Link>
        </div>

    );
};

export default HomeCard;