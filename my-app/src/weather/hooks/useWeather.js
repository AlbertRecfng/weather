import { useState, useEffect } from "react";
import { getWeather } from "../services/weatherService";

export const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("Qostanay");

  useEffect(() => {
    let cancelled = false;
        
    const fetchWeather = async () => {
    setLoading(true);
    setError(null);
       try {
            const data = await getWeather(city);
            if (!cancelled) setWeatherData(data);
       } catch (error) {
            if(!cancelled) setError(error.message);
       }finally{
        if (!cancelled) setLoading(false);
       }
    };

    fetchWeather();

        return () => { cancelled = true; };
    }, [city]);

  return {
    weatherData,
    loading,
    error,
    city,
    setCity
  };
};