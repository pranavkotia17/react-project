import { IoSearchOutline } from "react-icons/io5";
import cloudImage from './media/Assets/cloud.png';
import rain from './media/Assets/rain.png';
import clear from './media/Assets/clear.png';
import haze from './media/Assets/hazz.png';
import humidity from './media/Assets/humidity.png';
import wind from './media/Assets/wind.png';
import { WiSunrise } from "react-icons/wi";
import { LuSunset } from "react-icons/lu";
import { useState,} from "react";

function CityWeather(){
    const [cityName,setCityname] = useState('jaipur');
    const [setWeather, getWeather] = useState({});
    const handleSearch = ()=>{
    const apiKey = "dee1c8db80fcd6c0d082eb253234a0a9";
    // const sunrise = setWeather.sys.sunrise;
    // const timestamp = sunrise * 1000; // Convert seconds to milliseconds
    // const date = new Date(timestamp);
    if(cityName){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((response)=>{
                return response.json();
        })
        .then((data)=>{
            console.log(data);
            getWeather(data);
            
        })
        .catch((error)=>{
            console.log('error fetching data :', error);
        })

        

            
            
    }
    }

    // Function to convert timestamp to date format
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    };

    const date2 = (timestamp)=>{
        const sunSet = new Date(timestamp*1000);
        return sunSet.toLocaleString();
    }

    return(
        <>
         <div className="w-full h-screen bg-indigo-300">

           <div className="w-full h-full flex justify-center items-center">
           <div className="w-2/6   bg-gradient-to-t from-indigo-600 to-indigo-900 text-center px-4 py-10 rounded-md">
                <input type="text" placeholder="Search" className="px-14 py-3 rounded-full me-3 font-semibold font-mono" 
                value={cityName} onChange={(e)=>{setCityname(e.target.value)}} 
                />
                <button className="border-2 border-white px-3 py-3 rounded-full bg-white text-slate-700" onClick={handleSearch}><IoSearchOutline /></button>
                {setWeather.weather && setWeather.weather[0].main === 'Clouds' && (<img src={cloudImage} alt="" className="w-1/3 ms-32 mt-5" />) }
                {setWeather.weather && setWeather.weather[0].main === 'Rain' && (<img src={rain} alt="" className="w-1/3 ms-32 mt-5" />) }
                {setWeather.weather && setWeather.weather[0].main === 'Clear' && (<img src={clear} alt="" className="w-1/3 ms-32 mt-5" />) }
                {setWeather.weather && setWeather.weather[0].main === 'Haze' && (<img src={haze} alt="" className="w-1/3 ms-32 mt-5" />) }
                
                 <h1 className="text-6xl text-white font-semibold">{setWeather.main && setWeather.main.temp}</h1>
                 <h2 className="text-2xl text-white font-serif mt-2">{setWeather.name && setWeather.name}</h2>

                 <div className="flex justify-between mt-14">
                    <div className="flex ms-8">
                        <div><img src={humidity} alt="" className="w-3/4 mt-2" /></div>
                        <div>
                            <h2 className="me-8 text-white text-2xl font-mono">{setWeather.main && setWeather.main.humidity}%</h2>
                            <p className="text-white text-sm text-left font-serif">Humidity</p>
                        </div>
                    </div>
                    <div className="flex ms-8">
                        <div><img src={wind} alt="" className="w-3/4 mt-1"/></div>
                        <div>
                            <h2 className="me-8 text-white text-2xl font-mono">{setWeather.wind && Math.round(setWeather.wind.speed)}km/h</h2>
                            <p className="text-white text-sm text-left font-serif">Wind speed</p>
                        </div>
                    </div>
                    
                 </div>

                 
                        

            </div>

            <div className="w-1/6 bg-gradient-to-t from-indigo-600 to-indigo-900 rounded-lg ms-14 px-14 py-14 text-center">
                <div className="flex justify-center">
                <h1 className="text-8xl text-yellow-300"><WiSunrise /></h1>
                </div>
                <h3 className="text-white text-2xl mb-3 font-bold">Sunrise:</h3>
                <p className=" text-white text-lg">{setWeather.sys && formatDate(setWeather.sys.sunrise)}</p>
                 
           </div>

           <div className="w-1/6 bg-gradient-to-t from-indigo-600 to-indigo-900 rounded-lg ms-14 px-14 py-14 text-center">
                <div className="flex justify-center">
                <h1 className="text-7xl text-yellow-300 mb-6"><LuSunset /></h1>
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">Sunset:</h3>
                <p className=" text-white text-lg">{setWeather.sys && date2(setWeather.sys.sunset)}</p>
                 
           </div>
            
            
           </div>

           
           
          


         </div>

        </>
    )
}

export default CityWeather;