import styled from 'styled-components'
import {TextProps} from "./Text";
import {mapFontSize} from "../../../helpers/fonts";

export const MainStyle = styled.p`
  color: ${(props: TextProps) => props.color || 'inherit'};
  font-size: ${(props: TextProps) => mapFontSize(props.fontSize)};	
  line-height: 52px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: ${(props: TextProps) => !!props.position ? props.position : 'left'};;
`
