import React from 'react'
import "./ClientLayouts.scss"

export function ClientLayout(props) {
  const {children} = props;
  return (
    <div>
      <p>ClientLayout</p>

      {children}
    </div>
  )
}
