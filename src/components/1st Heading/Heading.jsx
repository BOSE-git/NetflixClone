import React from 'react';
import './Heading.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Heading(props){
    return(
        <div className="heading">
            <h1>{props.heading} <ArrowForwardIosIcon/></h1>
        </div>
    );
}

export default Heading;