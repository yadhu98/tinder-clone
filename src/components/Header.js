import React from 'react'
import '../Styles/Header.css'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'
function Header() {
    return (
        <div className="Header">
            <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img className='header_logo' src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png" alt='' />
            <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>
        </div>
    )
}

export default Header
