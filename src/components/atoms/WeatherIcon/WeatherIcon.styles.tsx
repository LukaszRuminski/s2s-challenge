import styled from 'styled-components'
import {weatherIconUrl} from "../../../constants/urls";
import {WeatherIconProps} from "./WeatherIcon";

const weatherIconPath = ( icon ) => weatherIconUrl + icon + '@2x.png'

export const WeatherIconStyled = styled.div`
  width: 20%;
  background-image: url(${(props: WeatherIconProps) => weatherIconPath(props.icon) });
  background-repeat: no-repeat;
  background-size: Contain;
  background-color: transparent;
  background-position: bottom;
  padding-bottom: 20%;

  @media (min-width: 768px) {
    width: 15%;
    background-position: center;
    background-size: cover;
    background-image: url(${(props: WeatherIconProps) => weatherIconPath(props.icon)});
  }
`