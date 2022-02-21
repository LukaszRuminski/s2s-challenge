import * as React from 'react'
import {
    CrossedBoxesWrapper,
    }
from './CrossedBoxes.styles'
import Box from "../../atoms/Box/Box";
import {black} from "../../../constants/colors";

export interface BoxProps {
    title: string,
    value: string
}

export interface CrossedBoxesProps {
    box1: BoxProps
    box2: BoxProps
    box3: BoxProps
    box4: BoxProps
}

const CrossedBoxes: React.FunctionComponent<CrossedBoxesProps> = ({
                                                              box1,
                                                              box2,
                                                              box3,
                                                              box4
                                                          }) => {
    console.log('box1', box1)

    return (
        <CrossedBoxesWrapper border={{size: 2, color: black}}>
            <Box {...box1}/>
            <Box {...box2}/>
            <Box {...box3}/>
            <Box {...box4}/>
        </CrossedBoxesWrapper>
    )
}

export default CrossedBoxes

