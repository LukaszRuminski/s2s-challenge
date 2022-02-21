import React from 'react'
import {
    WeatherIconStyled
} from './WeatherIcon.styles'


export interface WeatherIconProps {
    icon: string,
}

const WeatherIcon: React.FunctionComponent<WeatherIconProps> = ({
                                                              icon
                                                          }) => {
    return (
            <WeatherIconStyled icon={icon} />
    )
}

export default WeatherIcon