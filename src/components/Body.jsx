import './Body.css'
import Nav from './Nav'

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


    return (
        <div className='body'>
            <Nav />
            {props.arr.length === 0 ? card :
                <div className='body--list'>
                    <div className='body--nav'>
                        <h4>{`Maryam’s  Notes`}</h4>
                        <i>{` > `}</i>
                        <p>All Notes</p>
                    </div>

                    <div className='body--items'>
                        {/* <div className='grid grid-cols-4 gap-4'> */}
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                        <div className='body--item'>
                            <div className='body--item--head'>
                                <h4>Note</h4>
                                <p>44/44/20</p>
                            </div>
                            <button className='btn--done'>Done</button>
                            <button className='btn--del'>Del</button>
                            <ul>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                                <li>dsd</li>
                            </ul>
                            <button className='btn--edit'>Edit</button>
                        </div>
                    </div>

                </div>
            }
            {/* <div className='body--cap'></div> */}
        </div>
    )
}

export default Body