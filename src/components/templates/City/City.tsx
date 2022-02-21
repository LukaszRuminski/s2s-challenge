import React, {useEffect} from 'react'
import { CityDetailsStyled } from './City.styles'
import {ComplexTemperature} from "../../atoms/Temerature/Temperature";
import CrossedBoxes from "../../molecules/CrossedBoxes/CrossedBoxes";

export interface CityDetailsProps {
    cityData: any
}

const CityDetails: React.FunctionComponent<CityDetailsProps> = ({
                                                                cityData
                                                            }) => {
    useEffect(() => {
        console.log('cityData', cityData)
    }, [])


    const {main: {temp, temp_min, temp_max, humidity}, weather: {description}, visibility, sun} = cityData

    const humidityKM = humidity + ' %'
    const visibilityKM = visibility/1000 + ' km'

    return (
        <CityDetailsStyled>
            <ComplexTemperature temperature={temp} minTemp={temp_min} maxTemp={temp_max} main={description}/>
            <CrossedBoxes
                box1={{title: "sunrise", value: sun.sunrise}}
                box2={{title: "Sunset", value: sun.sunset}}
                box3={{title: "Humidity", value: humidityKM}}
                box4={{title: "Visibility", value: visibilityKM}} />
        </CityDetailsStyled>
    )
}

export default CityDetails