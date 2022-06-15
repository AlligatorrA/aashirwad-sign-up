import React from 'react'
import { useSignUp } from '../../context/signup-context'

const Role = () => {
    const { signUpFunc, signUpForm } = useSignUp()
    return (
        <div>
            <div className='coln_flex contact_form'>
                <label>
                    <h3>role you are looking for?</h3>
                    <select name='roles' className='contact_form_text'
                        onChange={signUpForm}>
                        <option value="Web Developer">Web Developer</option>
                        <option value="UI Developer">UI Developer</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Backend Developer">Backend Developer</option>
                    </select></label>
                <label >
                    <h3>How many years of work experience? </h3>
                    <select name="experience" id="" className='contact_form_text'
                        onChange={signUpForm}>
                        <option value="Fresher">Fresher</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-6 years">3-6 years</option>
                        <option value="6+years">6+years</option>
                    </select>
                </label>
                <div className="align_end">
                    <button className='btn' onClick={signUpFunc}>'Submit'</button>
                </div>
            </div>
        </div>
    )
}

export default Role