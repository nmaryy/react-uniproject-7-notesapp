import { useState, useEffect, useContext, createContext } from 'react'

const ProfileContext = createContext()

export function useProfileContext() {
    return useContext(ProfileContext)

}

function ProfileProvider({ children }) {
    const [profile, setProfile] = useState('')
    useEffect(() => {
        const profileData = localStorage.getItem('profile')
        if (profileData !== null) {
            const storedProfile = JSON.parse(profileData || [])
            setProfile(storedProfile)
        }
    }, [])

    return (
        <ProfileContext.Provider value={{
            profile: profile
            , setProfile: setProfile
        }}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider