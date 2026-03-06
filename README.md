# 🌤 Weather App

Приложение для просмотра погоды с поиском по городу, текущими условиями, прогнозом и дополнительной информацией.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/Vite-latest-646CFF?style=flat-square&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS_Modules-glass_design-1572B6?style=flat-square&logo=css3&logoColor=white)
![API](https://img.shields.io/badge/WeatherAPI-integration-orange?style=flat-square)

---

## 📸 Функциональность

- 🔍 **Поиск города** — введите название города и нажмите Enter или кнопку поиска
- 🌡 **Текущая погода** — температура, ощущаемая температура, влажность, ветер, давление, видимость
- 📅 **Прогноз на 3 дня** — средняя температура и описание погоды по дням
- 🌅 **Дополнительная информация** — восход/закат, УФ-индекс, облачность
- 💎 **Glass-морфизм дизайн** — современный UI с эффектом матового стекла

---

## 🛠 Стек

- **React 19** — UI компоненты
- **Vite** — сборка и dev-сервер
- **CSS Modules** — изолированные стили для каждого компонента
- **WeatherAPI** — источник данных о погоде

---

## 📁 Структура проекта

```
src/
├── components/
│   ├── SearchBar/         # Поиск города
│   ├── CurrentWeather/    # Текущая погода
│   ├── Forecast/          # Прогноз на 3 дня
│   └── AdditionalInfo/    # Доп. информация
├── hooks/
│   └── useWeather.js      # Кастомный хук для работы с API
├── services/
│   └── weatherService.js  # Запросы к WeatherAPI
├── utils/
│   └── helpers.js         # Иконки и форматирование дат
├── config/
│   └── config.js          # Конфигурация API
├── App.jsx
├── main.jsx
└── main.css
```

---

## 🚀 Запуск

### 1. Клонируй репозиторий

```bash
git clone https://github.com/AlbertRecfng/weather-app.git
cd weather-app
```

### 2. Установи зависимости

```bash
npm install
```

### 3. Создай файл `.env`

```env
VITE_WEATHER_API_KEY=your_api_key_here
VITE_WEATHER_BASE_URL=https://api.weatherapi.com/v1
VITE_FORECAST_DAYS=3
VITE_LANG=ru
```

> 🔑 API ключ можно получить бесплатно на [weatherapi.com](https://www.weatherapi.com/)

### 4. Запусти dev-сервер

```bash
npm run dev
```

Открой [http://localhost:5173](http://localhost:5173) в браузере.

---

## 📦 Сборка

```bash
npm run build
npm run preview
```

---

## 👤 Автор

**Albert Rekichinskiy** — [@AlbertRecfng](https://github.com/AlbertRecfng)
