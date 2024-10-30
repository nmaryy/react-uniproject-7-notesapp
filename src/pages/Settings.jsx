import React, { useEffect, useState } from 'react'
import './Settings.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer';
import { useMode } from '../assets/ContextProvider';
import { useProfileContext } from '../assets/ProfileProvider';


function Settings() {
    const { profile, setProfile } = useProfileContext()
    const { mode, setMode } = useMode()
    const [formSaved, setFormSaved] = useState(false)
    const [accountInputs, setAccountInputs] = useState(
        {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            age: profile.age,
            img: profile.img,
            gender: profile.gender,
            country: profile.country
        }
    )
    const [countries, setCountries] = useState('')

    function modeHandler() {
        setMode(prevMode => !prevMode)
    }

    function profileChangleHandler(event) {
        const { name, value } = event.target;
        setAccountInputs({
            ...accountInputs,
            [name]: value
        })
    }
    function profileUploadHandler(event) {
        event.preventDefault()
        setProfile(accountInputs)
        localStorage.setItem('profile', JSON.stringify(accountInputs));
        setFormSaved(true)
    }

    console.log(profile)


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
            <div className='settings--card'>
                <label htmlFor='switch-mode' >Switch Mode</label>
                <div className='nav--mode'>
                    <div className={!mode ? 'move' : 'nav--mode--check'}>
                        <input id='switch-mode' className={!mode ? 'move--inp' : 'nav--mode--input '} type='checkbox' checked={mode} onChange={modeHandler} />
                    </div>
                </div>
                <form onSubmit={profileUploadHandler}>
                    <div className='form--grids'>
                        <div className='form--col'>
                            <label>First Name</label>
                            <input name='firstName' value={accountInputs.firstName} onChange={profileChangleHandler} required placeholder='Mary' type='text' />
                        </div>
                        <div className='form--col'>
                            <label>Last Name</label>
                            <input name='lastName' value={accountInputs.lastName} onChange={profileChangleHandler} required placeholder='Cravitz' type='text' />
                        </div>
                        <div className='form--col'>
                            <label>Email</label>
                            <input name='email' value={accountInputs.email} onChange={profileChangleHandler} required placeholder='marycravitz@gmail.com' type='email' />
                        </div>
                        <div className='form--col'>
                            <label>Age</label>
                            <input name='age' value={accountInputs.age} onChange={profileChangleHandler} required placeholder='20' type='number' />
                        </div>
                        <div className='form--col'>
                            <label htmlFor='file'>Upload Profile Picture</label>
                            <input accept='image/*' name='file' id='file' size={60} type='file' />
                        </div>
                        <div className='form--col'>
                            <div className='selections'>
                                <select name='gender' value={accountInputs.gender} onChange={profileChangleHandler} required className={mode ? '' : 'select--dark'}>
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
                                <select name='country' value={accountInputs.country} onChange={profileChangleHandler} required className={mode ? '' : 'select--dark'}>
                                    <option>
                                        Country
                                    </option>
                                    {countries}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>

                        <button
                            type='submit' className='settings--save'>{formSaved ? 'Save Edits' : 'Saved'}</button>
                    </div>
                </form >
                <button className='settings--sub'>Buy Subscribtion</button>
            </div >
            <Footer />
        </div >

    )
}

export default Settings