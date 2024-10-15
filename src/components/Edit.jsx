import './Edit.css'
// import ReactMde from "react-mde";
// import * as Showdown from "showdown";
// import "react-mde/lib/styles/css/react-mde-all.css";
const Edit = () => {

    let date = new Date()

    let minute = date.getMinutes()
    if (minute < 10) {
        minute = 0 + `${minute}`
    }

    return (
        <div className='edit'>

            <div className='edit--top'>
                <div className='edit--state'>

                    <button>Write</button>
                    <button>Preview</button>
                </div>
                <div>

                    <button>B</button>
                    <button>I</button>
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
                        <span>{date.getHours()}</span><span>:</span><span>{minute}</span>
                    </div>
                    <div>


                        <span>{date.getMonth() + 1}</span><span>/</span><span>{date.getDate()}</span><span>/</span><span>{date.getFullYear()}</span>
                    </div>
                </div>
                <textarea></textarea>

            </div>
            <div className="edit--controls">
                <button>Cancel</button>
                <button>Add</button>
            </div>
        </div>
    )
}

export default Edit