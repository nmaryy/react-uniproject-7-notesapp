import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";




const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer--icons'>
                <a href='#'>

                    <i><FaLinkedin />
                    </i>
                </a>
                <a href='#'>
                    <i><FaTelegram />


                    </i>
                </a>
                <a href='#'>
                    <i><IoLogoWhatsapp />

                    </i>

                </a>
                <a href='#'>
                    <i><FaGithub />


                    </i>
                </a>
            </div>

            <p>© 2024 Notes App,
                Maryam Naderi</p>
        </div>
    )
}

export default Footer