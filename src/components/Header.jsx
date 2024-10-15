import { useState } from 'react'
import Footer from './Footer'
import './Header.css'
const Header = (props) => {
    const [listOpen, setListOpen] = useState(true)
    function listOpenHandler(event) {
        setListOpen((btnId) => {
            if (btnId = event.target.id) {
                console.log(event.target.value)
                return !listOpen

            }
        })
    }

    return (
        <div className='header'>
            <div className='header--top'>
                <span>
                    <img src='logolight.png' />

                </span>
                <span>Notes App</span>
            </div>
            {props.auth ?
                <div className='header--middle'>
                    <div className='header--middle--acc'>
                        <img src='image.png' />
                        <div>Maryam's Notes</div>
                    </div>
                    <div className='header--middle--add'>
                        <button className='add-btn' onClick={props.onEdit}>
                            +
                        </button>
                        <span>Add a new note</span>
                    </div>
                    <div className='header--btm'>
                        <div className='order'>
                            <div className='order--plus'>

                                <span>
                                    <button className='add-btn' id='recent' onClick={listOpenHandler}>
                                        {listOpen ? '+' : '-'}
                                    </button>
                                </span>
                                <span>
                                    Recent
                                </span>
                            </div>
                            <button>Recent</button>
                            <button>Recent</button>
                        </div>

                        <div className='order'>
                            <div className='order--plus'>

                                <span>

                                    <button className='add-btn' id='drafts' onClick={listOpenHandler}>
                                        {listOpen ? '+' : '-'}
                                    </button>
                                </span>
                                <span>
                                    Drafts
                                </span>
                            </div>
                            <button>Recent</button>
                            <button>Recent</button>
                            <button>Recent</button>
                        </div>
                        <div className='order'>
                            <div className='order--plus'>
                                <span>
                                    <button className='add-btn' id='done' onClick={listOpenHandler}>
                                        {listOpen ? '+' : '-'}
                                    </button>
                                </span>
                                <span>
                                    Done
                                </span>
                            </div>
                            <button>Recent</button>
                            <button>Recent</button>
                            <button>Recent</button>
                            <button>Recent</button>
                            <button>Recent</button>
                        </div>
                        <div className='order'>
                            <div className='order--plus'>
                                <span>
                                    <button className='add-btn' id='trash' onClick={listOpenHandler}>
                                        {listOpen ? '+' : '-'}
                                    </button>
                                </span>
                                <span>
                                    Trash
                                </span>
                            </div>
                            <button>Recent</button>
                            <button>Recent</button>
                            <button>Recent</button>
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