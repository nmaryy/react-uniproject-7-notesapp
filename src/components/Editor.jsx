import { useState } from 'react'
import './Edit.css'
import { useArray } from '../assets/ArrayProvider';



const Edit = (props) => {
    const [formNewTitle, setFormNewTitle] = useState(props.editingItem.title)
    const [formNewContent, setFormNewContent] = useState(props.editingItem.content)
    const [disable, setDisable] = useState(true)
    const { notes, updateNote } = useArray()


    function formHandler(event) {
        event.preventDefault()
        const updatedNote = {
            title: formNewTitle,
            content: formNewContent,
            id: props.editingItem.id
        }
        updateNote(updatedNote)
        props.onArrayUpdate()
    }



    return (
        <div className='edit'>

            <div className='edit--top'>
                <div className='edit--state'>

                    <button onClick={() => setDisable(false)}>Edit</button>
                    <button onClick={() => setDisable(true)} >View</button>
                </div>
            </div>
            <div className="edit--btm">
                <div className='edit--btm--top'>
                    <div>
                        <span>{new Date(props.editingItem.updatedAt).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div>
                        <span>{new Date(props.editingItem.updatedAt).toLocaleDateString()}</span>

                    </div>
                </div>
                {disable ? <div className='form--preview'>
                    <h3>{props.editingItem.title}</h3>
                    <p>{props.editingItem.content}</p>
                </div>
                    :
                    <form className='edit--form' onSubmit={formHandler}>
                        <textarea
                            value={formNewTitle}
                            required placeholder='Add your title'
                            className='noteTitle'
                            id='noteTitle' name='noteTitle'
                            autoComplete='off' maxLength={10}
                            onChange={e => setFormNewTitle(e.target.value)}
                        />
                        <textarea value={formNewContent}
                            required placeholder='Add your note'
                            className='noteContect'
                            id='noteContect' name='noteContect'
                            autoComplete='off' maxLength={546}
                            onChange={e => setFormNewContent(e.target.value)}
                        />
                        <div className="edit--controls">
                            <button type='submit'>Done</button>
                        </div>
                    </form>}

            </div>
        </div>
    )
}

export default Edit