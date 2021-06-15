import Axios from "axios";
import { useEffect , useState } from "react";
import Nav from "./Nav";
const Current_weather = () =>{
   
    const [city, setCity] = useState("");
    const [search , setSearch] = useState("Karachi");

    const API_key = "28bdca364e0f73b74e3942026b324265";
    const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}`;
    
    // API Request
    const fetchCurrentWeather = async () =>{
        var getResult = await Axios.get(endPoint);
        setCity(getResult.data);
        console.log(getResult); 
    }

    // Get Value from nav Component  
    const changeMyCity = (getSearchVal) => {
        setSearch(getSearchVal);
    }

    // Component Did Mount
      useEffect(() => {
        fetchCurrentWeather();
    }, []);

    return (
    <>    
            <Nav changeCurrentCity = {changeMyCity}/>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8"></div>
                    <div className="card border-secondary mb-3 col-md-4 p-0">
                        <div className="card-header"><h2 className="text-primary">{search}  </h2></div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">{city.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}

export default Current_weather;
