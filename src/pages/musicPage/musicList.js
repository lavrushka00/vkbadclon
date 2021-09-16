import React from 'react';
import MusicItem from "./musicItem";

const MusicList = ({tracks, removeTrack}) => {
    return (
            <div className="musicList">

                {
                    tracks.map( (track, id) =>
                        <MusicItem track ={track} key = {id} removeTrack = {removeTrack}/>
                    )
                }

            </div>
    );
};

export default MusicList;