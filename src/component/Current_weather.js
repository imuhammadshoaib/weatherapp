import Axios from "axios";
import { useEffect , useState } from "react";
import Nav from "./Nav";
const Current_weather = () =>{
   
    
    const [search , setSearch] = useState("Karachi");
    const [weatherIcon, setWeatherIcon] = useState("");
    const [weather, setWeather] = useState("");

    const API_key = "28bdca364e0f73b74e3942026b324265";
    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_key}`;
    
    // API Request
    const fetchCurrentWeather = async () =>{
        var getResult = await Axios.get(endPoint);
      
        // console.log(getResult); 
        setWeatherIcon(getResult.data.weather[0]);
        setWeather(getResult.data.main);
    }

    // Get Value from nav Component  
    const changeMyCity = (getSearchVal) => {
        setSearch(getSearchVal);
        setWeather(getSearchVal);
    }

    // Component Did Mount
      useEffect(() => {
        fetchCurrentWeather();
    }, [search]);

    return (
    <>    
            <Nav changeCurrentCity = {changeMyCity}/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7"></div>
                    <div className="card text-white bg-dark mb-3 col-md-5 p-0">
                    <div className="card-header">
                        <h2 className="text-primary">
                            <img src={ !weatherIcon  ? ("") : ('http://openweathermap.org/img/wn/'+weatherIcon.icon+'.png')}/> {search} 
                        </h2>
                        <h5><b>{ !weatherIcon ? ("Empty") : (weatherIcon.description)}</b></h5>
                     </div>
                        <div className="card-body text-secondary">
                            {!search      ? (<p>No Data Found</p>) : (
                                <>
                                <div className="row">
                                    <div className="col-6">
                                        <p className="text-left m-0">Temprature: <b>{weather.temp}</b></p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-left m-0">Min Temprature: <b>{weather.temp_min}</b></p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-left m-0">Max Temprature: <b>{weather.temp_max}</b></p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-left m-0">Feels Like: <b>{weather.feels_like}</b></p>
                                    </div>
                                    <div className="col-6">
                                        <p className="text-left m-0">Humidity: <b>{weather.humidity}</b></p>
                                    </div>
                                </div>    
                                 </>
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}

export default Current_weather;
