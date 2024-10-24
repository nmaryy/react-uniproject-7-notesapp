import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './Contact.css'
import { useMode } from '../assets/ContextProvider';


function Contact() {
    const { mode } = useMode()

    return (
        <div className={mode ? 'contact' : 'contact dark'}>
            <Nav />
            <div className='contact--desc'>
                <ul>
                    <li>
                        <span>
                            Email

                        </span>
                        <span>
                            Lorem ipsum dolor sit amet.

                        </span>
                    </li>
                    <li>
                        <span>
                            Linkedin

                        </span>
                        <span>
                            Lorem ipsum dolor sit amet.

                        </span>
                    </li>
                    <li>
                        <span>
                            Telegram

                        </span>
                        <span>
                            Lorem ipsum dolor sit amet.

                        </span>
                    </li>
                    <li>
                        <span>
                            WhatsApp
                        </span>
                        <span>
                            Lorem ipsum dolor sit amet.

                        </span >
                    </li>
                    <li>
                        <span>
                            Github

                        </span>
                        <span>
                            Lorem ipsum dolor sit amet.

                        </span >
                    </li>
                    <li>
                        <span>
                            Instagram

                        </span>
                        <span>
                            Lorem ipsum dolor sit amet.

                        </span >
                    </li>
                </ul >
            </div >
            <Footer />
        </div >
    )
}

export default Contact