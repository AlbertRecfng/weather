export const WeatherIcons = {
    sunny: '☀️',
    cloudy: '☁️',
    rain: '🌧️',
    snow: '❄️',
    thunder: '⛈️',
    mist: '🌫️',
    default: '☁️'
};

export function getWeatherIcon(conditionText) {
    const text = conditionText.toLowerCase();

    if (text.includes('солнеч') || text.includes('ясно')) return WeatherIcons.sunny;
    if (text.includes('дожд') || text.includes('rain')) return WeatherIcons.rain;
    if (text.includes('снег') || text.includes('snow')) return WeatherIcons.snow;
    if (text.includes('гроз') || text.includes('thunder')) return WeatherIcons.thunder;
    if (text.includes('туман') || text.includes('mist')) return WeatherIcons.mist;
    if (text.includes('облач') || text.includes('пасмур') || text.includes('cloudy')) {
        return WeatherIcons.cloudy;
    }

    return WeatherIcons.default;
}

export function formatDate() {
    return new Date().toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}