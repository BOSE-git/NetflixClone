import React from 'react';

function description(props){
    return(
        <div className="description">
            <div className={`text-desc ${props.playVideo ? 'text-transition' : ''}`}>
                <h2>#3 in TV shows Today</h2>
                <p>Geralt of Rivia, a mutated monster-hunter for hire, journeys towards his destiny in a turbulent world where people often prove more wicked than beasts.</p>
            </div>
        </div>
    );
}

export default description;