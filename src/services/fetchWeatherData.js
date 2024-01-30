
export const fetchWeatherData = async (city) => {

    try {
        const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
        const data = await response.json()

        if (data.cod === "404" || data == null) {
            return null
        }

        return data

    } catch (error) {
        console.error(error);
    }

}