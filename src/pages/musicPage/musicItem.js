import React from 'react';

const MusicItem = (props) => {
    return (
        <div className="musicItem">

            <div className="play"> > </div>
            <div className="muscicNameContainer">
                <div className="musicName">{props.track.trackName}</div>
                <div className="artistName">{props.track.Artist}</div>
                <audio src="myTrack.mp3">2</audio>

            </div>
            <div className="deleteMusic" onClick={() => props.removeTrack(props.track)}>удалить</div>

        </div>
    );
};

export default MusicItem;