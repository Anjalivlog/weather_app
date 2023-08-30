import React, { useEffect, useState} from 'react';
import '../Styles/CurrentLocation.css';
import video1 from '../Assets/video1.mp4'


const CurrentLocation = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval( () =>setTime(new Date()), 1000)
    },[]);
    
    
    var dt = time.toDateString();
    var dy = time.toLocaleString("default" , {weekday:'long'});

    return (
        <>
            <div className="currentTimeMain">
                    <div className='TimeSliderContainer'>
                        <div className='Overlay'>
                            <video src={video1} autoPlay loop muted />

                        {/* <div className='TimeSlide'>
                            <video src={video2} autoPlay loop muted className='TimeImg'/>
                        </div> */}

                        
                           <h2 className='state-name'>Delhi</h2>
                           <div className='DayDateConatiner'>
                             <p className='current-time'>{time.toLocaleTimeString()}</p>
                             <div className="current-day1">{dy}</div>
                             <div className="current-day">{dt}</div>
                           </div>
                        </div>   
                    </div>   
            </div>
        </>
    );
}



export default CurrentLocation;