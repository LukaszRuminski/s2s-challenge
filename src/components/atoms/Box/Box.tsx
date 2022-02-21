import React from 'react'
import {BoxWrapper, Data, Title} from './Box.styles'

export interface BoxProps {
    title: string,
    value: string,
}

const Box: React.FunctionComponent<BoxProps> = ({ title, value }) => {
    console.log('title', title)
    console.log('value', value)

    return (
        <BoxWrapper>
            <Title as="span" fontSize="md">{title}</Title>
            <Data as="p" fontSize="lg">{value}</Data>
        </BoxWrapper>
    )
}

export default Box