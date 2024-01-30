export const fetchCities = async (inputValue) => {

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_CITIES_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_CITIES_API_HOST
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.cod === "404" || result == null) {
            return null
        }
    
        return {
            options: result.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
    
    } catch (error) {
        console.error(error);
    }

}