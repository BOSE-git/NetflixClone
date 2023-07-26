import React from 'react';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function muteBtn(props){
    return(            
    <div onClick={props.functn} className={`mute-btn ${props.playVideo ? '' : 'hidden'}`}>
        <button><VolumeOffIcon /></button>
    </div>);
}

export default muteBtn;