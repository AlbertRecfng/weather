import { CONFIG } from '../config/config.js';

export const getWeather = async (city) => {
    const urls = [
            `${CONFIG.BASE_URL}/current.json?key=${CONFIG.API_KEY}&q=${city}&lang=${CONFIG.LANG}`,
            `${CONFIG.BASE_URL}/forecast.json?key=${CONFIG.API_KEY}&q=${city}&days=${CONFIG.FORECAST_DAYS}&lang=${CONFIG.LANG}`
        ];
    
        try {
            const [current, forecast] = await Promise.all(urls.map(url => fetch(url)));

            if(!current.ok || !forecast.ok){
                throw new Error("Город не найден или произошла ошибка API");
            }

            return {
            current: await current.json(),
            forecast: await forecast.json()
        };
        } catch (error) {
            console.error("Ошибка в getWeather:", error.message);
            throw error;
        }
}