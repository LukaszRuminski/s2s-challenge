import styled from "styled-components";
import {black, white} from "../../../constants/colors";
import {mapFontSize} from "../../../helpers/fonts";
import {ComplexTemperatureProps, TemperatureProps} from "./Temperature";
import {MainStyle} from "../Text/Text.styles";


export const TemperatureStyled = styled(MainStyle)`
  color: white;
  font-size: ${(props: TemperatureProps) => mapFontSize(props.fontSize)};
  margin: inherit;
  white-space: nowrap;
`

export const ComplexTemperatureWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  color:  black ;
  margin: 0;
  font-size: ${(props:ComplexTemperatureProps) => mapFontSize(props.fontSize)};
`
export const ComplexTemperatureStyled = styled(MainStyle)`
  color: black;
  font-size: ${(props: TemperatureProps) => mapFontSize(props.fontSize)};
  margin: inherit;
  white-space: nowrap;
`

export const ComplexTemperatureDescription = styled(MainStyle)`
  font-size: ${(props:ComplexTemperatureProps) => mapFontSize(props.fontSize)};
  margin: 0.1rem 0;
`
export const ComplexTemperatureMinMaxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: ${(props:ComplexTemperatureProps) => mapFontSize(props.fontSize)};
  margin: 0.1rem 0;
`

export const ComplexTemperatureMinMax = styled(MainStyle)`
  font-size: ${(props:ComplexTemperatureProps) => mapFontSize(props.fontSize)};
  margin: 0.1rem 0;
`