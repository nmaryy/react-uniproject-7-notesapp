import './Navigation.css'
import Backdrop from './Backdrop'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <div className='navigation' onMouseLeave={props.onMouseLeave}>
            <Link className='nav--links' to='/'>
                Dashboard
            </Link>
            <Link className='nav--links' to='/settings' >
                Account settings
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