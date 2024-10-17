import './Navigation.css'
import Backdrop from './Backdrop'
const Navigation = (props) => {
    return (
        <div className='navigation' onMouseLeave={props.onMouseLeave}>
            <ul>
                <li className='nav--li'>Dashboard</li>
                <li className='nav--li'>Account settings</li>
                <li className='nav--li'>Contact us</li>
                <li className='nav--li'>About us</li>
                <li className='nav--li'>Log out</li>
            </ul>
        </div>
    )
}

export default Navigation