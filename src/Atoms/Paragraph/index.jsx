import React from 'react'
import { ParagraphDefault } from './styles.js'

const Paragraph = ({children}) => {
    return (
        <ParagraphDefault>{children}</ParagraphDefault>
    )
}

export { Paragraph }