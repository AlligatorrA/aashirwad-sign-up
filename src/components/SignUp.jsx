import React, { useState } from 'react'
import Contact from './contacts/Contact'
import './Styles/contact.css'
import './Styles/signup.css'
import img from '../assets/1stImg.png'
import { useSignUp } from '../context/signup-context.jsx'
import Name from './name/Name'
import Email from './email-form/Email'
import Role from './lookingFor/Role'
import Otp from './opt/Otp'

const SignUp = () => {
    const { handleForm } = useSignUp()
    const [page, setPage] = useState(0)

    const pageTitle = ['Fill Contact ', 'Enter otp', 'Enter Name & gender', 'Enter Email', 'Enter Role']
    const pageDisplay = () => {
        if (page === 0) {
            return <Contact />
        }
        else if (page === 1) {
            return <Otp />
        }
        else if (page === 2) {
            return <Name />
        }
        else if (page === 3) {
            return <Email />
        }
        else if (page === 4) {
            return <Role />
        }
    }
    return (
        <div className="parent dis_flex flex_coln just_btw">
            <div className='contact'>
                <h1>{pageTitle[page]}</h1>
                <form action="" onSubmit={handleForm} className='  contact_form img'>
                    {pageDisplay()}
                </form>
                <div className="footer">
                    <button className='btn'
                        disabled={page === 0}
                        onClick={() => setPage(page => page - 1)}>prev </button>
                    <button className='btn'
                        disabled={page === pageTitle.length - 1}
                        onClick={() => setPage(page => page + 1)}>next</button>
                </div>
            </div>
            <picture className='picture'>
                <img src={img} alt="SignUp-Form" className='img' />
            </picture>
        </div>
    )
}

export default SignUp