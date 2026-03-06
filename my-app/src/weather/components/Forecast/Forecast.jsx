import { getWeatherIcon } from "../../utils/helpers";
import "./Forecast.css";

const Forecast = ({ data }) => {
  if (!data) return null;

  const forecastDays = data.forecast.forecastday;

  return (
    <section className="forecast glass-card">
      <h3 className="forecast-title">Прогноз на 3 дня</h3>
      <div className="forecast-grid">
        {forecastDays.map((day) => (
          <div key = {day.date} className="forecast-day">
            <p className="forecast-date">
              {new Date(day.date).toLocaleDateString("ru-RU", { weekday: "short" })}
            </p>
            <div className="forecast-icon">
              {getWeatherIcon(day.day.condition.text)}
            </div>
            <p className="forecast-temp">{Math.round(day.day.avgtemp_c)}°</p>
            <p className="forecast-desc">{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;