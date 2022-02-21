import React from 'react'
import Text from "../../atoms/Text/Text";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const text = `Created by Lukasz Ruminski in ${currentYear}`

    return (
        <Text color="#1687af" fontSize="sm" position="center" text={text} />
    )
}

export default Footer