import React from 'react'

const Otp = () => {
    return (
        <div>
            <>
                <label>
                    <h3>Enter `otp`</h3>
                    <p>Your Otp is `1234`</p>
                    <div className="dis_flex just_btw">
                        <input type="text" className='otp'
                            autoComplete='off'
                            required
                        />
                        <input type="text" className='otp'
                            autoComplete='off'
                            required
                        />
                        <input type="text" className='otp'
                            autoComplete='off'
                            required
                        />
                        <input type="text" className='otp'
                            autoComplete='off'
                            required
                        />
                    </div>
                </label>

            </>
        </div>
    )
}

export default Otp