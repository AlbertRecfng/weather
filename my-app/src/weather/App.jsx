import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar/searchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import "./main.css";

const App = () => {
  const { weatherData, loading, error, setCity } = useWeather();

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Прогноз погоды</h1>
        <SearchBar onSearch={setCity} />
      </header>
      <main className="main">
        {loading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && weatherData && (
          <>
            <CurrentWeather data={weatherData.current} />
            <Forecast data={weatherData.forecast} />
            <AdditionalInfo data={weatherData} />
          </> 
        )}
      </main>
    </div>
  );
};

export default App;