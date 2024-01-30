import { useQuery } from 'react-query';
import { fetchWeatherData } from '../services/fetchWeatherData';

export const useGetWeatherData = (city) => {

    return useQuery({
        queryKey: ["weather"],
        queryFn: () => fetchWeatherData(city),
    })
}
