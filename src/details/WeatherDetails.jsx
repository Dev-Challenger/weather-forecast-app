
import { getCityDate } from "../utils/GetCityDate";

const WeatherDetails = ({ data }) => {

    const invalidData = "N/A"

    const fetchedDetails = {
        Date: data.timezone ? getCityDate(data.timezone) : invalidData,
        Temp: data.main ? data.main.temp : invalidData,
        Description: data.weather ? data.weather[0].description : invalidData,
        Main: data.weather ? data.weather[0].main : invalidData,
        Pressure: data.main ? data.main.pressure : invalidData,
        Humidity: data.main ? data.main.humidity : invalidData,
    }

    if (!data) return <h3>{invalidData}</h3>

    return (
        <div className="weather-grid" >

            {Object.entries(fetchedDetails).map(([key, value]) => (
                <ul key={key}>
                    <li>{key}</li>
                    <li>{value}</li>
                </ul>
            ))}

        </div>
    )
}

export default WeatherDetails