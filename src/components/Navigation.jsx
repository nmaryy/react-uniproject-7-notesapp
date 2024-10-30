import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='navigation' >
            <Link className='nav--links' to='/'>
                Dashboard
            </Link>
            <Link className='nav--links' to='/settings' >
                Settings
            </Link>
            <Link className='nav--links' to='/contact'>
                Contact us
            </Link>
            <Link className='nav--links' to='/about'>
                About us
            </Link>
            <Link className='nav--links' >
                Log out
            </Link>
        </div>
    )
}

export default Navigation