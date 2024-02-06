import { useGetWeatherData } from "../hooks/useGetWeatherData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import WeatherDetails from "../details/WeatherDetails";
import SearchLoading from "../components/SearchLoading";
import './styles/WeatherForecast.css'

const WeatherForecast = () => {

    const { city } = useSelector((state) => state.user);
    const { data: weatherData, isFetching } = useGetWeatherData(city)

    return (
        <div className="weather-main">

            <h2 className="search-info">Searched Weather Information for: {city}</h2>

            <div className="weather-info">

                {isFetching ? <SearchLoading /> : <>
                    {weatherData ? (<>

                        <h1 className="city-name">
                            {weatherData.name && weatherData.name.toUpperCase()}
                        </h1>

                        <WeatherDetails data={weatherData} />

                    </>) : (
                        <h3>No weather data found for {city}</h3>
                    )} </>
                }
            </div>

            <Link className="link-button" to="/home" >Back</Link>
        </div>
    )
}


export default WeatherForecast;