import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const linkStyle= {
        textDecoration: 'none',
        color: '#fff',
    }
    


  return (
    <footer style={{backgroundColor: '#333', padding: '2rem', position: 'fixed', bottom: '0', right: '0', left: '0'}}>
        <ul style={ { listStyle: 'none', display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '18px', justifyContent: 'center' } }>
            <li><Link to='/' style={linkStyle}>Home</Link></li>
            <li><Link to='/about' style={linkStyle}>About</Link></li>
            <li><Link to='/services' style={linkStyle}>Services</Link></li>
            <li><Link to='/contact' style={linkStyle}>Contact</Link></li>
        </ul>
        <p style={{ color: 'red', textAlign: 'center' }}>&copy;Copyright 2026 MyCompany | All Rights Reserved</p>
    </footer>
  )
}

export default Footer