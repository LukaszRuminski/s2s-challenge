import * as React from "react";

export const WeatherContext = React.createContext({
    weatherData: [],
    setWeatherData: () => {},
});

export const CitiesContexts = React.createContext({
    cities: [],
    setCities: () => {},
});