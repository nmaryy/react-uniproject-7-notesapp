import { useState } from 'react'
import './Edit.css'


const Edit = (props) => {
    const [formTitle, setFormTitle] = useState()
    const [formContent, setFormContent] = useState('')
    const [disable, setDisable] = useState(false)

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
        props.onArrayMake(formTitle, formContent, month, day, year, hour, minute)
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
                        <span>{hour}</span><span>:</span><span>{minute}</span>
                    </div>
                    <div>
                        <span>{month}</span><span>/</span><span>{day}</span><span>/</span><span>{year}</span>

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