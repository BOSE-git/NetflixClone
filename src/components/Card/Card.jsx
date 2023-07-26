import React, {useState} from 'react';
import './Card.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';

function Card(props){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(clicked ? false : true);
    }
    const {jawSummary} = props.actualData;
    return(
        <div className="container-card">
            <div onClick={handleClick} className="img-container">
                <img src= {jawSummary.backgroundImage.url} alt={jawSummary.title} />
            </div>
            <div className="text" style={{top: clicked ? "0%" : '100%'}}>
                <div className="icons">
                    <PlayCircleIcon/>
                    <AddCircleIcon/>
                    <FavoriteIcon/>
                    <span className="cancel-icon"  onClick={handleClick}><CancelIcon/></span>
                </div>
                <div className="Title"><h1>{jawSummary.title}</h1></div>
                <div className="desc">{jawSummary.synopsis}</div>
            </div>
        </div>
    );
}

export default Card;