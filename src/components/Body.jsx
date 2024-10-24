import './Body.css'
import Edit from './Edit'
import Editor from './Editor'
import Nav from './Nav'
import { MdOutlineEdit } from "react-icons/md";



const Body = (props) => {

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



    return (
        <div className='body' >
            {props.editShown && <Edit onArrayMake={props.onArrayMake} />}
            {props.editorShown && <Editor editingItem={props.editingItem} onArrayUpdate={props.onArrayUpdate} />}
            <Nav onItemEdit={props.onItemEdit} data={props.arr} />
            {/* {arrlength && arrlengthCard} */}
            {!props.auth ? card :
                <div className='body--list'>
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