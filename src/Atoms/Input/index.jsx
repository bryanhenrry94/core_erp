import React from 'react'
import { InputDefault } from './styles.js'

const Input = ( { type='text', value, onChange } ) => {
    return (
        <InputDefault type={type} value={value} onChange={onChange}/>
    )
}

export { Input }