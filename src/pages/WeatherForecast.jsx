import { useGetWeatherData } from "../hooks/useGetWeatherData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCityDate } from "../utils/GetCityDate";
import './styles/WeatherForecast.css'

const WeatherForecast = () => {

    const { city } = useSelector((state) => state.user);
    const { data, isFetching } = useGetWeatherData(city)



    return (
        <div className="weather-main">

            <h2 className="search-info">Searched Weather Information for: {city}</h2>

            <div className="weather-info">

                {isFetching ? <h1>Loading...</h1> : <>
                    {data ? (<>

                        <h1 className="city-name">{data && data.name.toUpperCase()}</h1>

                        <div className="weather-grid" >

                            <ul>
                                <li>Date</li>
                                <li>{data ? getCityDate(data.timezone) : ""}</li>
                            </ul>
                            <ul>
                                <li>Temp(F)</li>
                                <li>{data && data.main && data.main.temp}</li>
                            </ul>
                            <ul>
                                <li>Description</li>
                                <li>{data && data.weather && data.weather[0].description}</li>
                            </ul>
                            <ul>
                                <li>Main</li>
                                <li>{data && data.weather && data.weather[0].main}</li>
                            </ul>
                            <ul>
                                <li>Pressure</li>
                                <li>{data && data.main && data.main.pressure}</li>
                            </ul>
                            <ul>
                                <li>Humidity</li>
                                <li>{data && data.main && data.main.humidity}</li>
                            </ul>

                        </div>
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