import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useMode } from '../assets/ContextProvider';
import './Body.css'
import Edit from './Edit'
import Editor from './Editor'
import Nav from './Nav'
import { MdOutlineEdit } from "react-icons/md";
import { useArray } from '../assets/ArrayProvider';
import { useProfileContext } from '../assets/ProfileProvider';


const Body = (props) => {
    const { mode } = useMode()
    const { notes } = useArray()
    const { profile } = useProfileContext()
    const [navInput, setNavInput] = useState('')
    const [resultElement, setResultElement] = useState([])
    const foundCondition = (navInput !== '' && resultElement.length > 0)
    const notFoundCondition = (navInput !== '' && resultElement.length === 0)

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

    function navChangeHandler(event) {
        const { value } = event.target
        setNavInput(value)
        if (value.trim() !== '') {
            setResultElement(() => notes.filter(d => d.title.includes(value) || d.content.includes(value)))
        } else {
            setResultElement([])
            setNavInput('')
        }
    }


    return (
        <div className='body' >
            {props.editShown && <Edit onArrayMake={props.onArrayMake} />}
            {props.editorShown && <Editor editingItem={props.editingItem} onArrayUpdate={props.onArrayUpdate} />}
            <Nav />
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

                    {foundCondition && <div onMouseLeave={() => {
                        setResultElement([])
                        setNavInput('')
                    }
                    }
                        className='results--overlay'>
                        {resultElement.map(r =>
                            r.state === 'pending' &&
                            <div onClick={() => {
                                props.onItemEdit(r)
                                setResultElement([])
                                setNavInput('')

                            }} className='indv--results--overlay' key={r.id}>
                                <h4>{r.title}</h4>
                                <p>{r.content}</p>
                            </div>
                        )}
                    </div>}


                    {notFoundCondition &&
                        <div
                            className='results--notfound'>

                            <p>No results found.</p>

                        </div>
                    }


                    <div className='body--nav'>
                        <h4>{profile.firstName !== '' ? `${profile.firstName.toUpperCase()}'s` : 'My'} Notes</h4>
                        <i>{`>`}</i>
                        <p>All Notes</p>
                    </div>

                    <div className='body--items' >
                        {notes.sort((a, b) =>
                            b.updatedAt - a.updatedAt
                        ).map(a =>
                            a.state === 'pending' &&
                            <div className='body--item' key={a.id}>
                                <div className='body--item--head'>
                                    <h4>{a.title}</h4>
                                    <div className='item--date'>{new Date(a.updatedAt).toLocaleDateString()}</div>
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