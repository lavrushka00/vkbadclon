import React, {useState} from 'react';
import './music.css'
import MusicList from "./musicList";

const Music = () => {
    const [tracks, setTracks] = useState([
        {id : 1, trackName : "5 minut nazad ", Artist : "blevad 1" },
        {id : 2, trackName : "6 minut nazad ", Artist : "blevad 2" },
        {id : 3, trackName : "7 minut nazad ", Artist : "blevad 3" },

    ])

    const removeTrack = (track) => {
        setTracks(tracks.filter(t => t.id !== track.id))
    }






    return (
        <div className='musicContainer'>
            <div className='musicSearch'>
                <input type="text" className='inputSearchMusic' placeholder="поиск аудиозаписей"/>
            </div>

            <MusicList removeTrack={removeTrack} tracks = {tracks} />


        </div>
    );
};

export default Music;