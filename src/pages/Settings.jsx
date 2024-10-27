import React, { useEffect, useState } from 'react'
import './Settings.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import { useMode } from '../assets/ContextProvider';


function Settings() {
    const { mode, setMode } = useMode()



    const [countries, setCountries] = useState('')
    const [profileUpload, setProfileUpload] = useState('')

    function modeHandler() {
        setMode(prevMode => !prevMode)
    }

    // function profileUploadHandler(event) {
    //     setProfileUpload(event.target.value)
    //     console.log(profileUpload)
    //     console.log(event.target.value)
    // }
    useEffect(() => {
        const data = async () => {
            const result = await fetch('https://restcountries.com/v3.1/all')
            result.json().then(json => {
                let response = json.map(j => j.name.common).sort()
                setCountries(() => response.map(
                    j => < option key={j} > {j}</option >).sort())
            })
        }
        data()
    }, [])
    return (
        <div className={mode ? 'settings' : 'settings dark'}>
            <Nav />
            <img src={profileUpload} />
            <div className='settings--card'>
                <label htmlFor='switch-mode' >Switch Mode</label>
                <div className='nav--mode'>
                    <div className={!mode ? 'move' : 'nav--mode--check'}>
                        <input id='switch-mode' className={!mode ? 'move--inp' : 'nav--mode--input '} type='checkbox' checked={mode} onChange={modeHandler} />
                    </div>
                </div>
                <form>
                    <div className='form--grids'>
                        <div className='form--col'>
                            <label>First Name</label>
                            <input placeholder='Mary' type='text' />
                        </div>
                        <div className='form--col'>
                            <label>Last Name</label>
                            <input placeholder='Cravitz' type='text' />
                        </div>
                        <div className='form--col'>
                            <label>Email</label>
                            <input placeholder='marycravitz@gmail.com' type='email' />
                        </div>
                        <div className='form--col'>
                            <label>Age</label>
                            <input placeholder='20' type='number' />
                        </div>
                        <div className='form--col'>
                            <label htmlFor='file'>Upload Profile Picture</label>
                            <input accept='image/*' name='file' id='file' size={60} type='file' />
                        </div>
                        <div className='form--col'>
                            <div className='selections'>
                                <select className={mode ? '' : 'select--dark'}>
                                    <option>
                                        Gender
                                    </option>
                                    <option>
                                        Male
                                    </option>
                                    <option>
                                        Female
                                    </option>
                                </select>
                                <select className={mode ? '' : 'select--dark'}>
                                    <option>
                                        Country
                                    </option>
                                    {countries}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>

                        <button type='submit' className='settings--save'>Save Edits</button>
                    </div>
                </form >
                <button className='settings--sub'>Buy Subscribtion</button>
            </div >
            <Footer />
        </div >
    )
}

export default Settings