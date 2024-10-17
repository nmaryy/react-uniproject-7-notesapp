import { useState } from 'react'
import './Edit.css'
// import ReactMde from "react-mde";
// import * as Showdown from "showdown";
// import "react-mde/lib/styles/css/react-mde-all.css";


const Edit = (props) => {
    const [formTitle, setFormTitle] = useState()
    const [formContent, setFormContent] = useState('')
    const [disable, setDisable] = useState(false)
    const [bold, setBold] = useState(false)
    const [italic, setItalic] = useState(false)
    const [titleSelection, setTitleSelection] = useState("")
    const [contentSelection, setContentSelection] = useState("")

    let date = new Date()
    let currDate = <>
        <span>{date.getMonth() + 1}</span><span>/</span><span>{date.getDate()}</span><span>/</span><span>{date.getFullYear()}</span>
    </>

    let hour = date.getHours()
    if (hour < 10) {
        hour = 0 + `${hour}`
    }
    let minute = date.getMinutes()
    if (minute < 10) {
        minute = 0 + `${minute}`
    }


    let found

    function contentSelectionHandler(event) {
        setContentSelection(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd))
        found = formContent.match(contentSelection)
        console.log(found)
    }
    function titleSelectionHandler(event) {
        setTitleSelection(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd))

    }

    function formHandler(event) {
        event.preventDefault()
        props.onArrayMake(formTitle, formContent, currDate)
    }



    return (
        <div className='edit'>

            <div className='edit--top'>
                <div className='edit--state'>

                    <button onClick={() => setDisable(false)}>Write</button>
                    <button onClick={() => setDisable(true)} >Preview</button>
                </div>
                <div>

                    <button onClick={() => setBold(!bold)}>B</button>
                    <button onClick={() => setItalic(!italic)}>I</button>
                    <button>Sy</button>
                </div>
                <div>

                    <button>x</button>
                    <button>x</button>
                    <button>s</button>
                </div>
            </div>
            <div className="edit--btm">
                <div className='edit--btm--top'>
                    <div>
                        <span>{hour}</span><span>:</span><span>{minute}</span>
                    </div>
                    <div>
                        {currDate}
                    </div>
                </div>
                {disable ? <div className='form--preview'>
                    <h3>{formTitle}</h3>
                    <p>{formContent}</p>
                </div>
                    :
                    <form className='edit--form' onSubmit={formHandler}>
                        <textarea value={formTitle}
                            required placeholder='Add your title'
                            className='noteTitle'
                            id='noteTitle' name='noteTitle'
                            autoFocus
                            autoComplete='off' maxLength={30}
                            onChange={e => setFormTitle(e.target.value)}
                            onSelect={titleSelectionHandler}
                        />
                        <textarea value={formContent}
                            required placeholder='Add your note'
                            className='noteContect'
                            id='noteContect' name='noteContect'
                            autoComplete='off' maxLength={546}
                            onChange={e => setFormContent(e.target.value)}
                            onSelect={contentSelectionHandler}
                        />
                        <div className="edit--controls">
                            <button type='submit'>Add</button>
                        </div>
                        <div className={bold ? 'bold' : ''}>{titleSelection}</div>
                        <div className={italic ? 'italic' : ''}>{contentSelection}</div>
                    </form>}

            </div>
        </div>
    )
}

export default Edit