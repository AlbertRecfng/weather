import "./AdditionalInfo.css";

const AdditionalInfo = ({data}) => {
  if (!data) return null;
  const sunsetTime = data.forecast.forecast.forecastday[0].astro.sunset;
  const sunriseTime = data.forecast.forecast.forecastday[0].astro.sunrise;
  const uvIndex = data.current.current.uv;
  const cloudiness = data.current.current.cloud;
  return (
    <section className="additional-info glass-card">
                <h3 className="info-title">Дополнительная информация</h3>
                <div className="info-grid">
                    <div className="info-item">
                        <span className="info-label">Восход солнца</span>
                        <span className="info-value">{sunriseTime}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Закат солнца</span>
                        <span className="info-value">{sunsetTime}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">УФ-индекс</span>
                        <span className="info-value">{uvIndex}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Облачность</span>
                        <span className="info-value">{cloudiness}%</span>
                    </div>
                </div>
    </section>
  );
};
export default AdditionalInfo;