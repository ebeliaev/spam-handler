import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://github.com/eugenebelieve" target="_blank" rel="noopener noreferrer">
          Eugène B.
        </a>
        <span className="ms-1">&copy; 2022.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Social Media Platforms - </span>
        <a href="https://github.com/eugenebelieve" target="_blank" rel="noopener noreferrer">
           Reports & Spam Handler
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
