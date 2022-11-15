import * as React from "react"
import Button from './button.js'
import {text} from '../styles/components/text.module.css'

const Text = ({ content }) => {
    const {title, body, button} = content
    return(
        /** if parameter is null, do not render */
        <div className={text}>
            {!title ? <></> : <h1>{title}</h1>}
            {!body ? <></> : <p>{body}</p>}
            {!button ? <></> : <Button>{button}</Button>}
        </div>
    )
}

export default Text