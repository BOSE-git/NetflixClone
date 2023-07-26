import React from 'react';
import Header from './HeaderFolder/Header';
import VideoPage from './VideoPage/VideoPage';
import "react-multi-carousel/lib/styles.css";
import Footer from './Footer/Footer';
import CardWithHeading from './CardwithHeading';



function App(){
    return (
        <div>
            <Header />
            <VideoPage />
            <CardWithHeading Heading = "Trending Now" />
            <CardWithHeading Heading = "Critically Acclaimed Tv Shows" />
            <CardWithHeading Heading = "New Releases" />
            <Footer />
        </div>
    )
}


export default App;