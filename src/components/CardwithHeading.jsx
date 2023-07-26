import React,{useState, useEffect} from 'react';
import Heading from './1st Heading/Heading';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card/Card';

function CardWithHeading(props){
    const [myData, setMyData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd70b47642dmshfffd2395e37eb29p1cfaf5jsn579abe417c7a',
		    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        try {
            const res = await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en', options)
            const data = await res.json();
            console.log(data);
            setMyData(data.titles)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return(
        
        <div>
            <Heading heading = {props.Heading} />
                    <div className="card-margin">
                        <Carousel responsive={responsive}>
                            {myData?.map((curElem) => {
                                return <Card key={curElem.summary.id} actualData={curElem} />;
                            }) ?? []}
                        </Carousel>
                    </div>
        </div>
    );
}

export default CardWithHeading;