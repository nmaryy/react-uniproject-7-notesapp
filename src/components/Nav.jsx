import { useState } from 'react'
import './Nav.css'
import Navigation from './Navigation'
import { IoIosSearch } from "react-icons/io";

const Nav = (props) => {
    const [isChecked, setIsChecked] = useState(false)
    const [navigationShown, setNavigationShown] = useState(false)

    function modeHandler() {
        setIsChecked(!isChecked)
        props.onMode(isChecked)
    }
    function brgHandlerShow() {
        setNavigationShown(true)
    }
    function brgHandlerHide() {
        setNavigationShown((prevnav) => {
            return !prevnav
        })
    }
    return (
        <div className='nav'>
            {navigationShown && <Navigation onMouseLeave={brgHandlerHide} />}

            <div className='nav--search'>
                <label name='search'><IoIosSearch /></label>
                <input className={isChecked ? 'nav--search nav--dark' : 'nav--search '} autoComplete='off' id='search' type='text' placeholder={'Search here'} />
            </div>
            <div className='nav--icons'>
                <div className='nav--mode'>

                    <div className={isChecked ? 'move' : 'nav--mode--check'}>

                        <input className={isChecked ? 'move--inp' : 'nav--mode--input '} type='checkbox' checked={isChecked} onChange={modeHandler} />
                    </div>
                </div>
                <div className='nav--brg' onMouseEnter={brgHandlerShow}  >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Nav