import * as React from 'react'
import { mainFlexbox } from '../../styles/components/main-flexbox.module.css'

const MainFlexbox = ({ children }) => {
  return (
    <div className={mainFlexbox}>
      {children}
    </div>
  )
}
export default MainFlexbox