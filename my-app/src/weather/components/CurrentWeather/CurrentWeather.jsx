import { getWeatherIcon, formatDate } from "../../utils/helpers";
import "./CurrentWeather.css";

const CurrentWeather = ({data}) => {
    if(!data) return null;

    const location = data.location;
    const current = data.current;
    const windMs = (current.wind_kph / 3.6).toFixed(1);
    const pressureMmHg = (current.pressure_mb * 0.750062).toFixed(1);

    return(
        <section className="current-weather glass-card">
      <div className="location">
        <h2 className="city-name">{location.name}</h2>
        <p className="date">{formatDate()}</p>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(current.temp_c)}</span>
          <span className="temp-unit">°C</span>
        </div>
        <div className="weather-icon">
          <div className="icon">{getWeatherIcon(current.condition.text)}</div>
        </div>
        <div className="weather-description">
          <p className="description">{current.condition.text}</p>
          <p className="feels-like">
            Ощущается как <span>{Math.round(current.feelslike_c)}</span>°C
          </p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Влажность</span>
          <span className="detail-value">{current.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Ветер</span>
          <span className="detail-value">{windMs} м/с</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Давление</span>
          <span className="detail-value">{pressureMmHg} мм</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Видимость</span>
          <span className="detail-value">{current.vis_km} км</span>
        </div>
      </div>
    </section>
    )
}
export default CurrentWeather;