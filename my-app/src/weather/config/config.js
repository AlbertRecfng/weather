export const CONFIG = {
    API_KEY: import.meta.env.VITE_WEATHER_API_KEY || 'your_api_key_here',
    BASE_URL: import.meta.env.VITE_WEATHER_BASE_URL || 'https://api.weatherapi.com/v1',
    FORECAST_DAYS: parseInt(import.meta.env.VITE_FORECAST_DAYS) || 5,
    LANG: import.meta.env.VITE_LANG || 'ru'
};
