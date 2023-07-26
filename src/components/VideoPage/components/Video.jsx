import React from 'react';

function Video(props){
    if(props.playVideo === true){
        return(<video src="/The Witcher.mp4" autoPlay loop muted={props.muteVideo} ></video>)
    }
    else if(props.playVideo === false)
    return(
        <img className='Transition' src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWOGQnCjGyUCJL7s_b4ZV-dlsvhwFiGXO3qRqpmCxP1aP-2F8QOaEE_qkrdt4Wb3vxSEdUc5YMzjKPhz-yU6HWqfR2zygGZijpYp.webp?r=bcc" alt="ImageVideo" />
    );
}

export default Video;