import './Nav.css'
import Navigation from './Navigation'
import { useMode } from '../assets/ContextProvider';



const Nav = () => {

    const { mode } = useMode()


    return (

        <div className='nav'>
            <div className='header--top'>
                <img className='banner--img' src={mode ? 'bannerlight.svg' : 'bannerdark.svg'} />

            </div>
            <Navigation />

        </div>
    )
}

export default Nav