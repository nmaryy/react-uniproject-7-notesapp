import Footer from './Footer'
import UnauthHeader from './UnauthHeader'
import { MdAdd } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineRestore } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { useArray } from '../assets/ArrayProvider';
import { useProfileContext } from '../assets/ProfileProvider';



import './Header.css'
import { useState } from 'react';
const Header = (props) => {
    const { profile } = useProfileContext()

    const [recentToggle, setRecentToggle] = useState(false)
    const [doneToggle, setDoneToggle] = useState(false)
    const [trashToggle, setTrashToggle] = useState(false)
    const { notes, restoreNote, hideNote, doneNote, deleteNote } = useArray()
    const arrowUp = <IoIosArrowUp />

    function recentClickHandler() {
        setRecentToggle(!recentToggle)
    }
    function doneClickHandler() {
        setDoneToggle(!doneToggle)

    }
    function trashClickHandler() {
        setTrashToggle(!trashToggle)

    }

    let orderItem = notes.sort((a, b) =>
        b.updatedAt - a.updatedAt
    ).map(a => {
        if (a.state === "pending") {
            return <button
                onClick={() => props.onItemEdit(a)

                }
                className={recentToggle ? 'button--title--parent appear' : 'button--title--parent'} key={a.id}>
                <span className='button--title'>
                    {a.title}
                </span>
                <span className='header--icons'>
                    <i onClick={(event) => {
                        hideNote(a.id)
                        event.stopPropagation()
                    }
                    }>
                        <RiDeleteBin2Line />
                    </i>
                    <i onClick={(event) => {
                        doneNote(a.id)
                        event.stopPropagation()
                    }
                    }>
                        <MdFileDownloadDone />
                    </i>
                </span>
            </button >
        }
    }
    )

    let doneItem = notes.map(a => {
        if (a.state === "done") {
            return <button className={recentToggle ? 'button--title--parent appear' : 'button--title--parent'} key={a.id}>
                <span className='button--title'>
                    {a.title}
                </span>
                <span className='header--icons'>
                    <i className='trash--del' onClick={() => hideNote(a.id)}>
                        <RiDeleteBin2Line />
                    </i>
                </span >
            </button >
        }
    })


    let trashItem = notes.map(a => {
        if (a.state === "hidden") {
            return <button className={recentToggle ? 'button--title--parent appear' : 'button--title--parent'} key={a.id}>
                <span className='button--title'>
                    {a.title}
                </span>
                <span className='header--icons'>
                    <i className='trash--del' onClick={() => deleteNote(a.id)}>
                        <RiDeleteBin2Line />
                    </i>
                    <i className='trash--del' onClick={() => restoreNote(a)}>
                        <MdOutlineRestore />

                    </i>
                </span>
            </button>
        }
    })


    return (
        <div className='header ' >
            {
                props.auth ?
                    <div className='header--middle'>
                        <div className='header--middle--acc'>
                            <img src='avatarlight.png' />
                            <div>{profile.firstName !== undefined ? `${profile.firstName.toUpperCase()}'s` : 'My'} Notes</div>
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
                                        <i onClick={recentClickHandler} className={recentToggle ? 'arrow arrowDownAnimation arrowDown ' : 'arrow arrowUpAnimation '}>

                                            {arrowUp}
                                        </i>
                                    </span>
                                    <span>
                                        Recent
                                    </span>
                                </div>
                                {recentToggle && orderItem}
                            </div>
                            <div className='order'>
                                <div className='order--plus'>
                                    <span>
                                        <i onClick={doneClickHandler} className={doneToggle ? 'arrow arrowDownAnimation arrowDown ' : 'arrow arrowUpAnimation'}>

                                            {arrowUp}
                                        </i>
                                        Done
                                    </span>
                                </div>
                                {doneToggle && doneItem}
                            </div>
                            <div className='order'>
                                <div className='order--plus'>
                                    <span>
                                        <i onClick={trashClickHandler} className={trashToggle ? 'arrow arrowDownAnimation arrowDown ' : 'arrow arrowUpAnimation'}>
                                            {arrowUp}
                                        </i>
                                        Trash
                                    </span>
                                </div>
                                {trashToggle && trashItem}
                            </div>


                        </div>
                    </div>

                    : <UnauthHeader />
            }
            < Footer />
        </div >
    )
}

export default Header