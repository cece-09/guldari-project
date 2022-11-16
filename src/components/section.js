import * as React from 'react'
import { section, inner } from '../styles/components/section.module.css'

const Section = ({ children, bgColor }) => {
  const sectionStyle = {
    backgroundColor: bgColor,
  }
  return (
    <section
      style={sectionStyle}
      className={section}>
      <div className={inner}>
        {children}
      </div>
    </section>
  )
}
export default Section