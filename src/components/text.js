import * as React from "react"
import Button from './button.js'
import {text, center, right, left} from '../styles/components/text.module.css'

const Text = ({ content, align }) => {
    const {title, body, button} = content
    const alignItems = (align) => {
        if(align === 'center') return center
        else if(align === 'right') return right
        else return left
    }
    return(
        /** if parameter is null, do not render */
        <div className={`${text} ${alignItems(align)}`}>
            {!title ? <></> : <h1>{title}</h1>}
            {!body ? <></> : <p>{body}</p>}
            {!button ? <></> : <Button>{button}</Button>}
        </div>
    )
}

export default Text