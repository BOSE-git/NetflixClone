import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Buttons(){
    return(
        <div className="buttons">
            <button><PlayArrowIcon fontSize='large' /><p>Play</p></button>
            <button className='infoIcon'><InfoIcon fontSize='large' /><p>More Info</p></button>
        </div>
    );
}

export default Buttons;