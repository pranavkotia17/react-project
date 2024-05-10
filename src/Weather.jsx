import { useState } from "react"

function Weather(){
   const [cityName, setCityname] =  useState('jaipur');
   const [weather,setWeather] = useState({});

    const handleChange = (e)=>{
        setCityname(e.target.value);
    }

    const handleSearch = ()=>{
        const apiKey = "dee1c8db80fcd6c0d082eb253234a0a9";
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        if(cityName){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                    setWeather(data);
                    console.log(data);
            })
            .catch((error)=>{
                console.log("error occured :", error);
            })
        }
    }

    return(
        <>
        <div className="bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center">

            <div className="w-3/5 h-4/5 bg-slate-400 rounded-lg bg-gradient-to-r from-slate-700 to-slate-500 flex">

                <div className="bg-left w-1/2 h-full bg-cover bg-no-repeat rounded-l-lg relative">
                        <div className="flex justify-end">
                            <p className="text-2xl text-black font-bold mt-2 me-2">
                                {weather.name && weather.name}, {weather.sys && weather.sys.country}
                            </p> 
                        </div>

                        <div className="flex justify-between h-4/5 items-end">
                                <div className="text-white font-bold text-2xl ms-2 absolute bottom-1">
                                    <p>{weather.coord && weather.coord.lat}</p>
                                    <p>{weather.coord && weather.coord.lon}</p>
                                </div>
                                <p className="text-white font-bold text-2xl absolute bottom-1 right-0 me-2">{weather.main && weather.main.temp}</p>
                        </div>
                </div>

                <div className="w-1/2">
                   <div>
                        <p className="mt-14">
                            <input type="text" placeholder="Enter city" className="w-3/4 bg-transparent text-2xl pl-2" value={cityName} 
                            onChange={handleChange}/>
                            <button className="w-1/4 font-bold text-2xl" onClick={handleSearch}>Search</button>
                        </p>
                   </div>
                   <div className="text-center mt-10 font-bold text-2xl text-white">
                        <p>
                        {weather.name && weather.name}, {weather.sys && weather.sys.country}
                        </p>

                        <p>{weather.weather && weather.weather[0].main}</p>
                   </div>
                   <div className="mt-14">
                        <div className="flex justify-around text-xl semi-bold text-white border-b border-gray-400 m-4 p-2">
                            <p>visiblity</p>
                            <p>{weather.visibility && weather.visibility/1000}km</p>
                        </div>
                        <div className="flex justify-around mt-7 text-xl semi-bold text-white border-b border-gray-400 m-4 p-2">
                            <p>wind speed</p>
                            <p>{weather.wind && weather.wind.speed}km</p>
                        </div>
                        <div className="flex justify-around mt-7 text-xl semi-bold text-white border-b border-gray-400 m-4 p-2">
                            <p>temp</p>
                            <p>{weather.main && weather.main.temp}</p>
                        </div>
                   </div>
                </div>


            </div>

        </div>
        </>
    )
}

export default Weather