"use client"
import React,{useState} from 'react'
import { loginUser } from '@/app/actions'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation'
function LoginForm() {
  const{setAuth}=useAuth()
  const router=useRouter()
   const[error,setError]=useState("")
    const onSubmit=async(event)=>{
        event.preventDefault()

        try {
            const formData=new FormData(event.currentTarget)
           const foundUser= await loginUser(formData)
            if(foundUser){
              setAuth(foundUser)
              router.push("/")
            }
            else{
              setError("Please provide a valid login credential")
            }

            
        } catch (error) {
            setError(error?.message)
            
        }

    }
  return (
    <>
    <div className='text-red-500 my-2'>
        {error}
    </div>
              <form className="login-form" onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>

            <button
              type="submit"
              className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
              Login
            </button>
          </form> 
    </>

          
        )
}

export default LoginForm
