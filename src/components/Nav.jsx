import { useState } from 'react'
import './Nav.css'
import Navigation from './Navigation'
const Nav = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [navigationShown, setNavigationShown] = useState(false)
    let ds = 'icon'
    // let style = { isChecked &&transform: 'translateX(0.8rem)' }


    function modeHandler() {
        setIsChecked(!isChecked)
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
                <input type='text' placeholder={`${ds} Search here`} />
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