import React, { useState } from 'react'
const Contact = () => {

    const [contact, setContact] = useState({
        phone: "",
        check: false,
    })
    const handleContact = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact({
            ...contact, [name]: value
        })
    }
    return (
        <div>
            <div className='coln_flex contact_form'>
                <>
                    <label htmlFor="Contact">
                        <h3>your Mobile Number?</h3>
                        <input type="number" placeholder='Enter your Contact' className='contact_form_text'
                            autoComplete='off'
                            required
                            name='phone'
                            value={contact.phone}
                            onChange={handleContact}
                        />
                    </label>
                    <label className='dis_flex just_center align_center cur'>
                        <input type="checkbox"
                            autoComplete='off'
                            required
                            name='check'
                            value={contact.check}
                            onChange={handleContact}
                        /> <span> by checkin you confirm that you accept our <b> <u> Terms and condtitiond </u> </b> and have read our  <b> <u> Privacy policy </u> </b> </span>
                    </label>
                </>
            </div>
        </div>
    )
}

export default Contact