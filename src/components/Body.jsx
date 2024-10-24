import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useMode } from '../assets/ContextProvider';
import './Body.css'
import Edit from './Edit'
import Editor from './Editor'
import Nav from './Nav'
import { MdOutlineEdit } from "react-icons/md";


const Body = (props) => {
    const { mode } = useMode()

    const [navInput, setNavInput] = useState('')
    const [resultElement, setResultElement] = useState('')
    const resultCondition = resultElement !== null && resultElement.length > 0



    let card = <div className='body--card'>
        <h3>
            Login to add your notes.
        </h3>
        <p>Signup if you don't have an account...</p>
        <div>
            <button className='acc-btns'>
                Login
            </button>
            <button className='acc-btns'>
                Signup
            </button>
        </div>
    </div>

    // let arrlength = props.auth && props.arr.length === 0
    let arrlengthCard =
        <div className='body--card' >
            <p>
                you have zero notes, click Add a new note to begin...
            </p>
        </div >



    function navChangeHandler(event) {
        const { value } = event.target
        setNavInput(value)
        if (value.trim() !== '') {
            setResultElement(() => props.arr.filter(d => d.title.includes(value) || d.content.includes(value)))
        } else {
            setResultElement(null)
            setNavInput('')
        }
    }


    return (
        <div className='body' >
            {props.editShown && <Edit onArrayMake={props.onArrayMake} />}
            {props.editorShown && <Editor editingItem={props.editingItem} onArrayUpdate={props.onArrayUpdate} />}
            <Nav />
            {/* {arrlength && arrlengthCard} */}
            {!props.auth ? card :

                <div className='body--list'>
                    <div className='nav--search'>
                        <form >
                            <label name='search'><IoIosSearch /></label>
                            <input
                                value={navInput}
                                onChange={navChangeHandler}
                                className={!mode ? 'nav--search nav--dark' : 'nav--search '} autoComplete='off' id='search' type='text' placeholder={'Search here'} />
                        </form>
                    </div>

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


                    <div className='body--nav'>
                        <h4>{`Maryam’s  Notes`}</h4>
                        <i>{` > `}</i>
                        <p>All Notes</p>
                    </div>

                    <div className='body--items' >
                        {props.arr.map(a =>
                            <div className='body--item' key={a.id}>
                                <div className='body--item--head'>
                                    <h4>{a.title}</h4>
                                    <div className='item--date'>{a.month}/{a.day}/{a.year}</div>
                                </div>

                                <p>{a.content}</p>
                                <button className='btn--edit' onClick={() => props.onItemEdit(a)}><i>
                                    <MdOutlineEdit />
                                </i>
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            }
        </div>
    )
}

export default Body