import { useState } from 'react'
import Footer from './Footer'
import UnauthHeader from './UnauthHeader'
import { MdAdd } from "react-icons/md";
import { MdOutlineRemove } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useMode } from '../assets/ContextProvider';
import { MdOutlineRestore } from "react-icons/md";




import './Header.css'
const Header = (props) => {

    const { mode } = useMode()

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


    let orderItem = props.arr.map(a =>
        <button className='button--title--parent' key={a.id}>
            <span className='button--title'>

                {a.title}
            </span>


            <span>

                <i onClick={() => props.onDelete(event, a.id)}>
                    <RiDeleteBin2Line />
                </i>
                <i onClick={() => props.onDone(event, a.id)}>
                    <MdFileDownloadDone />
                </i>
            </span>
        </button>
    )

    let doneItem = props.done.map(a =>
        <button className='button--title--parent' key={a.id}>
            <span className='button--title'>
                {a.title}
            </span>
            <span>

                <i className='trash--del' onClick={() => props.onDelDone(event, a.id)}>
                    <RiDeleteBin2Line />
                </i>
            </span >
        </button >
    )
    let trashItem = props.del.map(a =>
        <button className='button--title--parent' key={a.id}>
            <span className='button--title'>
                {a.title}
            </span>

            <span>
                <i className='trash--del' onClick={() => props.onDelTrash(event, a.id)}>
                    <RiDeleteBin2Line />
                </i>
                <i className='trash--del' onClick={() => props.onrestoreTrash(event, a)}>
                    <MdOutlineRestore />

                </i>
            </span>
        </button>
    )



    return (
        <div className='header '>
            {props.auth ?
                <div className='header--middle'>
                    <div className='header--middle--acc'>
                        {mode ? <img src='avatarlight.png' /> : <img src='avatardark.png' />}

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
                            {listOpen.recent && props.arr.length === 0 ?
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
                            {listOpen.done && props.done.length === 0 ?
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
                            {listOpen.trash && props.del.length === 0 ?
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