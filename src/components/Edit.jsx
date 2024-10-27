import { useState } from 'react'
import './Edit.css'
import { useArray } from '../assets/ArrayProvider';



const Edit = (props) => {
    const [formTitle, setFormTitle] = useState()
    const [formContent, setFormContent] = useState('')
    const [disable, setDisable] = useState(false)
    const { addNote } = useArray()

    let time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
    let date = new Date().toLocaleDateString()

    const data = { formTitle, formContent, date, time }
    function formHandler(event) {
        event.preventDefault()
        addNote(data)
        props.onArrayMake()
    }



    return (
        <div className='edit'>

            <div className='edit--top'>
                <div className='edit--state'>

                    <button onClick={() => setDisable(false)}>Write</button>
                    <button onClick={() => setDisable(true)} >Preview</button>
                </div>
            </div>
            <div className="edit--btm">
                <div className='edit--btm--top'>
                    <div>
                        <span>{time}</span>
                    </div>
                    <div>
                        <span>{date}</span>

                    </div>
                </div>
                {disable ? <div className='form--preview'>
                    <h3>{formTitle}</h3>
                    <p>{formContent}</p>
                </div>
                    :
                    <form className='edit--form' onSubmit={formHandler}>
                        <textarea
                            value={formTitle}
                            required placeholder='Add your title'
                            className='noteTitle'
                            id='noteTitle' name='noteTitle'
                            autoFocus
                            autoComplete='off' maxLength={10}
                            onChange={e => setFormTitle(e.target.value)}
                        />
                        <textarea value={formContent}
                            required placeholder='Add your note'
                            className='noteContect'
                            id='noteContect' name='noteContect'
                            autoComplete='off' maxLength={546}
                            onChange={e => setFormContent(e.target.value)}
                        />
                        <div className="edit--controls">
                            <button type='submit'>Add</button>
                        </div>
                    </form>}

            </div>
        </div>
    )
}

export default Edit