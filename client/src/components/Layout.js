import React from 'react'
import NavBar from './NavBar'

export default ({ children, authenticated, currentUser }) => (
  <div>
    <div
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    {children}
  </div>
)
