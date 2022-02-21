import React from 'react'
import {
    TemperatureStyled,
    ComplexTemperatureWrapperStyled,
    ComplexTemperatureStyled,
    ComplexTemperatureDescription,
    ComplexTemperatureMinMaxWrapper,
    ComplexTemperatureMinMax
} from './Temperature.styles'


export type TemperatureProps = {
    temperature: number,
}

export type ComplexTemperatureProps = {
    temperature: number,
    main: string,
    maxTemp: number,
    minTemp: number
}

const roundedTemperature = (temperature) => Math.round(temperature) + ' °C'

export const ComplexTemperature: React.FunctionComponent<ComplexTemperatureProps> = ({
                                                                                  temperature,
                                                                            main,
                                                                            maxTemp,
                                                                            minTemp
}) => {
    return (
        <ComplexTemperatureWrapperStyled>
            <ComplexTemperatureDescription fontSize="lg" position="center" >{main}</ComplexTemperatureDescription>
            <ComplexTemperatureStyled fontSize="xl" >{roundedTemperature(temperature)}</ComplexTemperatureStyled>
            <ComplexTemperatureMinMaxWrapper>
                <ComplexTemperatureMinMax as="span" fontSize="sm">{'H: ' + roundedTemperature(maxTemp)}</ComplexTemperatureMinMax>
                <ComplexTemperatureMinMax as="span" fontSize="sm">{'L: ' + roundedTemperature(minTemp)}</ComplexTemperatureMinMax>
            </ComplexTemperatureMinMaxWrapper>
        </ComplexTemperatureWrapperStyled>
    )
}

export const Temperature: React.FunctionComponent<TemperatureProps> = ({
                                                                    temperature
                                                                }) => {

    return (
        <TemperatureStyled as="p" fontSize="md">
            {roundedTemperature(temperature)}
        </TemperatureStyled>
    )
}
