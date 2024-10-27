import { useState } from 'react'
import Footer from './Footer'
import UnauthHeader from './UnauthHeader'
import { MdAdd } from "react-icons/md";
import { MdOutlineRemove } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineRestore } from "react-icons/md";


import { useArray } from '../assets/ArrayProvider';


import './Header.css'
const Header = (props) => {
    const { notes, hideNote, doneNote, deleteNote } = useArray()

    const [listOpen, setListOpen] = useState({
        recent: false,
        done: false,
        trash: false
    })

    function recentOpenHandler() {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                recent: !listOpen.recent
            }
        })
    }

    function doneOpenHandler() {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                done: !listOpen.done
            }
        })
    }
    function trashOpenHandler() {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                trash: !listOpen.trash
            }
        })
    }


    let orderItem = notes.map(a => {
        if (a.state === "pending") {
            return <button className='button--title--parent' key={a.id}>
                <span className='button--title'>

                    {a.title}
                </span>


                <span>

                    <i onClick={() => hideNote(a.id)}>
                        <RiDeleteBin2Line />
                    </i>
                    <i onClick={() => doneNote(a.id)}>
                        <MdFileDownloadDone />
                    </i>
                </span>
            </button>
        }
    }
    )

    let doneItem = notes.map(a => {
        if (a.state === "done") {
            return <button className='button--title--parent' key={a.id}>
                <span className='button--title'>
                    {a.title}
                </span>
                <span>

                    <i className='trash--del' onClick={() => hideNote(a.id)}>
                        <RiDeleteBin2Line />
                    </i>
                </span >
            </button >
        }
    })


    let trashItem = notes.map(a => {
        if (a.state === "hidden") {
            return <button className='button--title--parent' key={a.id}>
                <span className='button--title'>
                    {a.title}
                </span>

                <span>
                    <i className='trash--del' onClick={() => deleteNote(a.id)}>
                        <RiDeleteBin2Line />
                    </i>
                    {/* <i className='trash--del' onClick={() => props.onrestoreTrash(event, a)}>
                        <MdOutlineRestore />

                    </i> */}
                </span>
            </button>
        }
    })



    return (
        <div className='header '>
            {props.auth ?
                <div className='header--middle'>
                    <div className='header--middle--acc'>
                        <img src='avatarlight.png' />
                        <div>Maryam's Notes</div>
                    </div>
                    <div className='header--middle--add'>
                        <button className='add-btn' onClick={props.onEdit}>
                            <MdAdd />
                        </button>
                        <span>Add a new note</span>
                    </div>
                    <div className='header--btm'>
                        <div className='order'>
                            <div className='order--plus'>

                                <span>
                                    <button className='add-btn' id='recent' onClick={recentOpenHandler}>
                                        {!listOpen.recent ? <MdAdd /> : <MdOutlineRemove />
                                        }
                                    </button>
                                </span>
                                <span>
                                    Recent
                                </span>
                            </div>
                            {listOpen.recent && notes.length === 0 ?
                                <p className='no--item'>No Items in recent.</p> :
                                <>
                                    {listOpen.recent && orderItem}
                                </>

                            }

                        </div>

                        <div className='order'>
                            <div className='order--plus'>
                                <span>
                                    <button className='add-btn' id='done' onClick={doneOpenHandler}>
                                        {!listOpen.done ? <MdAdd />
                                            : <MdOutlineRemove />
                                        }
                                    </button>
                                </span>
                                <span>
                                    Done
                                </span>
                            </div>
                            {listOpen.done && notes === 0 ?
                                <p className='no--item'>No Items in Done.</p> :
                                <>
                                    {listOpen.done && doneItem}                                </>

                            }

                        </div>
                        <div className='order'>
                            <div className='order--plus'>
                                <span>
                                    <button className='add-btn' id='trash' onClick={trashOpenHandler}>
                                        {!listOpen.trash ? <MdAdd />
                                            : <MdOutlineRemove />
                                        }
                                    </button>
                                </span>
                                <span>
                                    Trash
                                </span>
                            </div>
                            {listOpen.trash &&
                                notes.length === 0 ?
                                <p className='no--item'>No Items in Trash.</p> :
                                <>
                                    {listOpen.trash && trashItem}
                                </>
                            }
                        </div>


                    </div>
                </div>

                : <UnauthHeader />}
            <Footer />
        </div >
    )
}

export default Header