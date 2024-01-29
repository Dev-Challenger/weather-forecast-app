import { useQuery } from 'react-query';
import { fetchWeatherData } from '../services/fetchWeatherData';

export const useGetWeatherData = (city) => {

    return useQuery({
        queryKey: ["items"],
        queryFn: () => fetchWeatherData(city),
    })
}
