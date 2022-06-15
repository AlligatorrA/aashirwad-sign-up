import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";


const SignUpContext = createContext()

const SignUpProvider = ({ children }) => {
    const [signUpVal, setSignUpVal] = useState({
        name: "",
        gender: "",
        email: "",
        city_preffered: "",
        roles: [],
        experience: ""
    })
    const signUpForm = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setSignUpVal((data) => ({
            ...data, [name]: value
        }))
    }
    const signUpFunc = async (e) => {
        e.preventDefault()
        console.log(signUpVal, 'signUpVal');
        try {
            const res = await axios.post(`https://api.fastjobs.io/frontendtask`, signUpVal)
            toast("successful")
            console.log(res);
            return res.data

        } catch (error) {
            toast("failed to submit")

        }
    }
    return <SignUpContext.Provider value={{ signUpVal, signUpForm, signUpFunc }}>
        {children}
    </SignUpContext.Provider>
}

const useSignUp = () => useContext(SignUpContext)
export { SignUpProvider, useSignUp }