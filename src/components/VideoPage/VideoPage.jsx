import React, { useState } from 'react';
import './VideoPage.css';
import Video from './components/Video'
import ShowLogo from './components/showLogo';
import Description from './components/desCription';
import Btns from './components/Buttons';
import MuteBtn from './components/MuteBtn';


function VideoPage(){
    const [playVideo, setPlayVideo] = useState(false);
    const [muteVideo, setMuteVideo] = useState(false);

    function playVideoFuncton(){
        setPlayVideo(playVideo ? false : true);
    }
    function muteVideoFunction(){
        setMuteVideo(muteVideo ? false : true);
    }

    return(
        <div className="btn-overlay">
            <div onClick = {playVideoFuncton} className={`container ${playVideo ? 'play-video' : ''}`}>
                <div className="video">
                    <Video playVideo = {playVideo} muteVideo = {muteVideo} />
                </div>
                <div className="sub-container">
                        <ShowLogo />
                        <Description playVideo = {playVideo}/>
                        <Btns />
                </div>
            </div>
            <MuteBtn playVideo = {playVideo} functn = {muteVideoFunction} />
            <div className="blackoverlay"></div>
        </div>
    );
}

export default VideoPage;