import Footer from './Footer'
import UnauthHeader from './UnauthHeader'
import { MdAdd } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineRestore } from "react-icons/md";


import { useArray } from '../assets/ArrayProvider';


import './Header.css'
const Header = (props) => {
    const { notes, restoreNote, hideNote, doneNote, deleteNote } = useArray()

    let orderItem = notes.sort((a, b) =>
        b.updatedAt - a.updatedAt
    ).map(a => {
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
                    <i className='trash--del' onClick={() => restoreNote(a)}>
                        <MdOutlineRestore />

                    </i>
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
                                    <MdAdd /> Recent
                                </span>
                            </div>
                            {orderItem}
                        </div>
                        <div className='order'>
                            <div className='order--plus'>
                                <span>
                                    <MdAdd /> Done
                                </span>
                            </div>
                            {doneItem}
                        </div>
                        <div className='order'>
                            <div className='order--plus'>
                                <span>
                                    <MdAdd />  Trash
                                </span>
                            </div>
                            {trashItem}
                        </div>


                    </div>
                </div>

                : <UnauthHeader />}
            <Footer />
        </div >
    )
}

export default Header