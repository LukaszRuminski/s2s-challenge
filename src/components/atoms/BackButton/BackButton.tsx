import React from 'react'
import {BackButtonStyled, BackButtonWrapper} from './BackButton.styles'

const BackButton = ({back}) => {


    return (
        <BackButtonWrapper onClick={back}>
            <BackButtonStyled />
        </BackButtonWrapper>
    )
}

export default BackButton