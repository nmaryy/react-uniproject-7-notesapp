import { useState } from 'react'
import './Nav.css'
import Navigation from './Navigation'
import Editor from './Editor'
import { IoIosSearch } from "react-icons/io";
import { useMode } from '../assets/ContextProvider';


const Nav = (props) => {
    const { mode, setMode } = useMode()

    const [navInput, setNavInput] = useState('')
    const [navigationShown, setNavigationShown] = useState(false)
    const [resultElement, setResultElement] = useState('')


    function navChangeHandler(event) {
        const { value } = event.target
        setNavInput(value)
        if (value.trim() !== '') {
            setResultElement(() => props.data.filter(d => d.title.includes(value) || d.content.includes(value)))
        } else {
            setResultElement(null)
            setNavInput('')
        }
    }


    function modeHandler() {
        setMode(prevMode => !prevMode)
    }
    function brgHandlerShow() {
        setNavigationShown(true)
    }
    function brgHandlerHide() {
        setNavigationShown((prevnav) => {
            return !prevnav
        })
    }


    const resultCondition = resultElement !== null && resultElement.length > 0

    return (

        <div className='nav'>
            {resultCondition && <div onMouseLeave={() =>
                setResultElement(null)
            }
                className='results--overlay'>
                {resultElement.map(r =>
                    <div onClick={() => {
                        props.onItemEdit(r)
                        setResultElement(null)
                        setNavInput('')

                    }} className='indv--results--overlay' key={r.id}>
                        <h4>{r.title}</h4>
                        <p>{r.content}</p>
                    </div>
                )}
            </div>}



            {navigationShown && <Navigation onMouseLeave={brgHandlerHide} />}

            <div className='nav--search'>
                <form >
                    <label name='search'><IoIosSearch /></label>
                    <input
                        value={navInput}
                        onChange={navChangeHandler}
                        className={!mode ? 'nav--search nav--dark' : 'nav--search '} autoComplete='off' id='search' type='text' placeholder={'Search here'} />
                </form>
            </div>
            <div className='nav--icons'>
                <div className='nav--mode'>

                    <div className={!mode ? 'move' : 'nav--mode--check'}>
                        <input className={!mode ? 'move--inp' : 'nav--mode--input '} type='checkbox' checked={mode} onChange={modeHandler} />
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