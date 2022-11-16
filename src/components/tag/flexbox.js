import * as React from 'react'
const flexBoxStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
}
const Flexbox = ({ children }) => {
  return (
    <div style={flexBoxStyle}>
      {children}
    </div>
  )
}
export default Flexbox