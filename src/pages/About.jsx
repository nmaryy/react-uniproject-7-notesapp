import React from 'react'
import './About.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import UnauthHeader from '../components/UnauthHeader';
import { useMode } from '../assets/ContextProvider';

function About() {
    const { mode } = useMode()

    return (
        <div className={mode ? 'about' : 'about dark'}>
            <Nav />
            <div className='unauth'>
                <UnauthHeader />
            </div>
            <Footer />
        </div>
    )
}

export default About