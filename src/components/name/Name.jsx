import React from 'react'
import { useSignUp } from '../../context/signup-context';

const Name = () => {
    const { signUpForm, signUpVal } = useSignUp()

    return (
        <div>
            <div className='coln_flex contact_form '>
                <label htmlFor="name">
                    <h3>What should we call you?</h3>
                    <input type="text" placeholder='Enter your name' className='contact_form_text'
                        autoComplete='off'
                        required
                        name='name'
                        value={signUpVal.name}
                        onChange={signUpForm}
                    />
                </label>
                <h3>Gender</h3>
                <div className=" m5 dis_flex just_btw">
                    <label className=' cur'>
                        <input type="radio" className=' m5 arial_hide '
                            required
                            name='gender'
                            value='male'
                            onChange={signUpForm}
                        /><i className="fa-solid fa-person fa-2x"></i>male
                    </label>
                    <label className=' cur '>
                        <input type="radio" className=' m5 arial_hide'
                            required
                            name='gender'
                            value='female'
                            onChange={signUpForm}
                        /><i className="fa-solid fa-person-dress fa-2x"></i>female
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Name