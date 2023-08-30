import React, { useEffect, useState} from 'react';
import '../Styles/ForCast.css'
import axios from 'axios';

const ForCast = () => {
     
    const apikey = "27668eb3d23f0d2ee32008dcf1fba594" 
    const[inputCity, setInputCity] = useState("");
    const[data, setData] = useState({});
   
    

    const getWeatherDetails = (cityName) => {
        
        if(!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
        axios.get(apiURL).then((res) => {
            console.log("response", res.data)
            setData(res.data)
        }).catch((err) => {
            console.log("err", err)
            // if (error.response && error.response.status === 429){
            //     const retryAfter = parseInt(error.response.headers['retry-after']) || 5 ;
            //     setTimeout(getWeatherDetails, retryAfter * 1000);
            // } else {
            //     console.error(error);
            // }
            
        })
        setInputCity('');
    }  

    const handleChange = (event) => {
        setInputCity(event.target.value);
      };

    const handleSearch = () => {
        getWeatherDetails(inputCity);
    } 

    useEffect(() => {
        getWeatherDetails();
    },[data])

    
     return (
        <>
            <div className='weatherApp'>
                 <div className='search-container'>
                    <input 
                    type='text'
                    value={inputCity}
                    className='inputField'
                    placeholder='Enter your Location'
                    onChange={handleChange}
                    name='text'
                    />
                    {<i class="fa fa-magnifying-glass" title='search' onClick={handleSearch} ></i>}
                 </div>
                <div className='weatherApp-container'>
                    <div className='container-top'>
                        <div className='location'>
                            <p>{data.name}</p>
                        </div>
                        <div className='location-temp'>
                            {data.main ? <h1>{((data.main.temp) - 273.15).toFixed(2)}°</h1> : null}
                        </div>
                        <div className='location-discrption'>
                            <p>Clouds</p>
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                        </div>
                    </div>
                    {data.name !== undefined &&
                    <div className='container-bottom'>
                        <div className='feels'>
                            {data.main ? <p className='feels-bold'>{((data.main.feels_like) - 273.15).toFixed(2)}°</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className='humidity'>
                            {data.main ? <p className='feels-bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity Be</p>
                        </div>
                        <div className='wind'>
                            {data.wind ? <p className='feels-bold'>{(data.wind.speed).toFixed(2)} mps</p> : null}
                            <p>Wind Speed</p>
                        </div>
                        <div className='pressure'>
                            {data.visibility ? <p className='feels-bold'>{((data.visibility) * 0.001).toFixed(2)} km</p> : null}
                            <p>Visibility</p>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
     );
    
}

export default ForCast;