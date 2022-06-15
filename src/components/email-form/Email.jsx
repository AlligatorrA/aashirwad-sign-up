import React from 'react'
import { useSignUp } from '../../context/signup-context'

const Email = () => {
    const { signUpVal, signUpForm } = useSignUp()
    return (
        <div>
            <div className='coln_flex contact_form'>
                <label >
                    <h3>Where can we reach you?</h3>
                    <input type="email" placeholder='Enter your Email' className='contact_form_text'
                        autoComplete='off'
                        required
                        name='email'
                        value={signUpVal.email}
                        onChange={signUpForm}
                    /></label>
                <label>
                    <h3>Preffered City to Work?</h3>
                    <select name='city_preffered' id="" className='contact_form_text'
                        onChange={signUpForm}>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangluru">Bangluru</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Uttar pradesh">Uttar Pradesh</option>
                    </select></label>
            </div>
        </div>
    )
}

export default Email