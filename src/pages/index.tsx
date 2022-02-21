import type { NextPage } from 'next'
import React, {useContext, useEffect, useState} from 'react'
import Head from 'next/head'
import Text from "../components/atoms/Text/Text";
import Footer from "../components/templates/Footer/Footer";
import Dashboard from "../components/templates/Dashboard/Dashboard";
import {getCityData} from "../services/collectData";
import {CitiesContexts, WeatherContext} from "./contexts/contexts";
import {LayoutWrapper} from "./global.styles";


const Home: NextPage = () => {
    const { weatherData, setWeatherData } = useContext(WeatherContext);
    const { cities, setCities} = useContext(CitiesContexts);
    const [ dataReady, setDataReady ] = useState(false);

    useEffect(() => {
        const fetchCitesWeather = async () => {
            const collectedData = await getCityData(cities)
            console.log('collectedData', collectedData)
            setWeatherData(collectedData)
            setDataReady(true)
        }
        fetchCitesWeather()
    }, [])


    return (
        <LayoutWrapper>
          <Head>
            <title>Source2Sea</title>
            <meta name="description" content="Source2sea Weather - Dashboard" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Text as="h1" color="#002124" fontSize="lg" text="Dashboard" position="center" />

          {dataReady ? <Dashboard data={weatherData}/> : 'fetching data'}

          <Footer />
        </LayoutWrapper>
    )
}

export default Home
