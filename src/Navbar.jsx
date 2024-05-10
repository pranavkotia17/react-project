import { Link } from "react-router-dom"

function Navbar(){
    return(
        <div className="bg-neutral-300 py-6 flex text-white font-bold text-2xl font-mono hover:bg-violet-600">
            <h1 className="ml-10">Pranav</h1>
        <ul className="flex justify-end w-full">
            <li className="pe-12"><Link to='/'>Todo</Link></li>
            <li className="pe-12"><Link to='/weather'>Weather</Link></li>
            <li className="pe-12"><Link to='/city-weather'>CityWeather</Link></li>
        </ul>
        </div>
    )
}

export default Navbar