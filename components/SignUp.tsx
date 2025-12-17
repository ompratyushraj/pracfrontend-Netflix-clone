import React, { useContext,useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form'

interface Inputs{
    email: string,
    password:string
}
  
const SignUp = () => {
    const { signUp, user } = useContext(AuthContext)

    const [data, setData] = useState<Inputs>({
        email: "",
        password:""
    })
    const handleSubmit=() => {
        console.log(data)
        signUp(data.email, data.password)
        console.log("user",user)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setData(values => ({ ...values, [name]: value }))
      }
    

    return (
        <div>
            <h1>Sign Up</h1>
         

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="email"
                        type="text"
                        placeholder='email'
                        className='text-black '
                        onChange={handleChange}
                        value={data.email}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="text"
                        placeholder='password'
                        className='text-black'
                        onChange={handleChange}
                        value={data.password}
                    />
                </div>
              
                
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default SignUp
