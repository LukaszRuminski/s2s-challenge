import React from 'react'
import { MainStyle } from './Text.styles'

export interface TextProps {
    text: string,
    color: string,
    position?: "left" | "center" | "right" | undefined,
    fontSize?: "sm" | "md" | "lg" | undefined
}

const Text: React.FunctionComponent<TextProps> = ({ text, color, position,fontSize}) => (

    <MainStyle fontSize={fontSize} color={color} position={position}>{text}</MainStyle>
)

export default Text
