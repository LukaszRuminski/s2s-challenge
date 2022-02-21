import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from "react";
import {WeatherContext} from "../contexts/contexts";
import Head from "next/head";
import Text from "../../components/atoms/Text/Text";
import Footer from "../../components/templates/Footer/Footer";
import CityDetails from "../../components/templates/City/City";
import BackButton from "../../components/atoms/BackButton/BackButton";
import {LayoutWrapper} from "../global.styles";

const Location = () => {
    const { weatherData } = useContext(WeatherContext);
    const router = useRouter()
    const { city: cityRoute } = router.query

    const [currentCityWeather, setCurrentCityWeather] = useState(undefined)

    useEffect(() => {
        const index = weatherData.findIndex((value) => {
            const {city} = value

            if(city.toLowerCase() == cityRoute)
                return true;
        })

        console.log(index)
        console.log(weatherData[index])

        setCurrentCityWeather(weatherData[index])
    }, [])

    const goBack = () => router.back()

    return (
        <LayoutWrapper>
            <Head>
                <title>Source2Sea</title>
                <meta name="description" content='Source2sea Weather - Dashboard' />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {currentCityWeather && <>
                <BackButton back={goBack} /><Text color="#002124" text={currentCityWeather.city} fontSize="lg" position="center" />
                <CityDetails cityData={currentCityWeather} />
                </>}

            <Footer />
        </LayoutWrapper>
    )
}

export default Location