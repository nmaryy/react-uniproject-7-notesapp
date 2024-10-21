import { useState } from 'react'
import './Edit.css'


const Edit = (props) => {
    const [formTitle, setFormTitle] = useState(props.editingItem.title)
    const [formContent, setFormContent] = useState(props.editingItem.content)
    const [disable, setDisable] = useState(true)
    let date = new Date()

    let month = date.getMonth() + 1
    let day = date.getDate()
    let year = date.getFullYear()
    let hour = date.getHours()
    if (hour < 10) {
        hour = 0 + `${hour}`
    }
    let minute = date.getMinutes()
    if (minute < 10) {
        minute = 0 + `${minute}`
    }

    function formHandler(event) {
        event.preventDefault()
        props.onArrayUpdate(formTitle, formContent, month, day, year, hour, minute, props.editingItem.id)
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
                        <span>{props.editingItem.hour}</span><span>:</span><span>{props.editingItem.minute}</span>
                    </div>
                    <div>
                        <span>{props.editingItem.month}</span><span>/</span><span>{props.editingItem.day}</span><span>/</span><span>{props.editingItem.year}</span>

                    </div>
                </div>
                {disable ? <div className='form--preview'>
                    <h3>{props.editingItem.title}</h3>
                    <p>{props.editingItem.content}</p>
                </div>
                    :
                    <form className='edit--form' onSubmit={formHandler}>
                        <textarea
                            value={formTitle}
                            required placeholder='Add your title'
                            className='noteTitle'
                            id='noteTitle' name='noteTitle'
                            autoComplete='off' maxLength={30}
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
                            <button type='submit'>Done</button>
                        </div>
                    </form>}

            </div>
        </div>
    )
}

export default Edit