import React from 'react'
import {
    ButtonWrapper, City
} from './CityButton.styles'
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon";
import {Temperature} from "../../atoms/Temerature/Temperature";
import { useRouter } from 'next/router'


export interface ButtonProps {
    city: string,
    temperature: number,
    icon: string,
}

const CityButton: React.FunctionComponent<ButtonProps> = ({
    city,
    temperature,
    icon
    }) => {
    const router = useRouter();

    const goToCityDetails = async () => {
        await router.push(`/location/${city.toLowerCase()}`)
    }

    return (
        <ButtonWrapper onClick={goToCityDetails}>
            <City>{city}</City>
            <Temperature complex={false} temperature={temperature} />
            <WeatherIcon icon={icon} />

        </ButtonWrapper>
    )
}

export default CityButton

