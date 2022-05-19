import React from 'react'

import "./footerHeader.css"


function FooterHeader({foterTitle, foterTitleDefinition, link}) {
  return (
    <div className='footer-header'>
        <div className='footer-header-left'>
            <h4>{foterTitle}</h4>
            <p>{foterTitleDefinition}</p>
        </div>

        <div className='footer-header-right'>
            <a href='#link'>{link}</a>
        </div>
    </div>
  )
}

export default FooterHeader