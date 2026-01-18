import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const linkStyle= {
        textDecoration: 'none',
        color: '#fff'
    }


  return (
    <nav style={{backgroundColor: '#333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 2rem' }}>
        <Link to='/' style={linkStyle}><h1><span style={{color: 'red'}}>My</span>Company</h1></Link>

        <ul style={ { listStyle: 'none', display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '18px' } }>
            <li><Link to='/' style={linkStyle}>Home</Link></li>
            <li><Link to='/about' style={linkStyle}>About</Link></li>
            <li><Link to='/services' style={linkStyle}>Services</Link></li>
            <li><Link to='/contact' style={linkStyle}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar