import { useState } from 'react'
import Footer from './Footer'
import { MdAdd } from "react-icons/md";
import { MdOutlineRemove } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";


import './Header.css'
const Header = (props) => {
    const [listOpen, setListOpen] = useState({
        recent: false,
        drafts: false,
        done: false,
        trash: false
    })

    function recentOpenHandler(event) {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                recent: !listOpen.recent
            }
        })
    }
    function draftsOpenHandler(event) {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                drafts: !listOpen.drafts
            }
        })
    }
    function doneOpenHandler(event) {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                done: !listOpen.done
            }
        })
    }
    function trashOpenHandler(event) {
        setListOpen((prevstate) => {
            return {
                ...prevstate,
                trash: !listOpen.trash
            }
        })
    }

    return (
        <div className='header '>
            <div className='header--top'>
                <span>
                    <img src={props.appMode ? 'bannerlight.svg' : 'bannerdark.svg'} />

                </span>
            </div>
            {props.auth ?
                <div className='header--middle'>
                    <div className='header--middle--acc'>
                        {props.appMode ? <img src='avatarlight.png' /> : <img src='avatardark.png' />}

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
                            {listOpen.recent && <>
                                <button>Recent
                                    <span>

                                        <i>
                                            <RiDeleteBin2Line />
                                        </i>
                                        <i>
                                            <MdFileDownloadDone />
                                        </i>
                                    </span>
                                </button>
                                <button>Recent</button>
                            </>
                            }

                        </div>

                        <div className='order'>
                            <div className='order--plus'>

                                <span>

                                    <button className='add-btn' id='drafts' onClick={draftsOpenHandler}>
                                        {!listOpen.drafts ? <MdAdd />
                                            : <MdOutlineRemove />
                                        }
                                    </button>
                                </span>
                                <span>
                                    Drafts
                                </span>
                            </div>
                            {listOpen.drafts && <>
                                <button>Recent</button>
                                <button>Recent</button>
                                <button>Recent</button>
                            </>}
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
                            {listOpen.done && <>
                                <button>Recent</button>
                                <button>Recent</button>
                                <button>Recent</button>
                                <button>Recent</button>
                                <button>Recent</button>
                            </>}
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
                            {listOpen.trash && <>
                                <button>Recent</button>
                                <button>Recent</button>
                                <button>Recent</button>
                            </>}
                        </div>


                    </div>
                </div>

                : <div className='header--desc'>
                    <h4>About us</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vitae repudiandae, voluptas quibusdam, dolore porro perspiciatis eligendi ad eum soluta animi et quas natus atque quos sapiente! Eligendi, aliquam laudantium. Soluta autem similique dolorum, numquam est voluptates porro tempore fuga asperiores alias neque blanditiis vero optio quisquam eveniet sint! Doloribus!
                    </p>
                </div>}
            <Footer />
        </div >
    )
}

export default Header