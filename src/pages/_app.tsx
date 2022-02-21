import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import {LayoutWrapper} from "./global.styles";
import {useMemo, useState} from "react";
import {WeatherContext, CitiesContexts} from "./contexts/contexts";

function MyApp({ Component, pageProps }: AppProps) {
    const [weatherData, setWeatherData] = useState([]);
    const [cities, setCities] = useState(["London", "Berlin"]);
    const value: any = useMemo(
        () => ({ weatherData, setWeatherData }),
        [weatherData]
    );
    // const locations: any ={ cities, setCities }
    const locations: any = useMemo(
        () => ({ cities, setCities }),
        [cities, setCities]
    );


    return(
        <WeatherContext.Provider value={value}>
        <CitiesContexts.Provider value={locations}>
              <Component {...pageProps} />
        </CitiesContexts.Provider>
        </WeatherContext.Provider>
    )
}

export default MyApp
