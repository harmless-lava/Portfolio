import React from 'react'
import { useState, useEffect } from 'react'

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm : React.FC<LoginFormProps>  = ({onLogin}) => {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect(()=>{
        console.log("Logged in state changed:", loggedIn)
    }, [loggedIn])

    const  handleSubmit = async ()=>{
        const API_URL = "http://localhost:5000/api/login" 

        if (username === "" || password === ""){
            alert("Please fill in all fields")
            return
        }

        try {
          const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          })

          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          const data = await response.json()
          if (username === data.username && password === data.password) {
            onLogin(username, password)}
        } catch (error) {
          console.error('There was a problem with the fetch operation:', error)}

        // Simulate an API call to check credentials

        


        if (username === "apar" && password === "apar"){
          onLogin(username, password)
          setLoggedIn(true)
          sessionStorage.setItem("username", username)
          sessionStorage.setItem("password", password)
          console.log("Login successful")
        }
        else {
          console.log("Login failed")
        }
        
        //code will be updated when the backend is setuped
    }



  return (
    <div className='flex items-center space-x-2'>
        <input type='text' placeholder='username' className='p-1 rounded' value={username} onChange ={(e) => setUsername(e.target.value)} />
        <input type='text' placeholder='password' className='p-1 rounded' value={password} onChange ={(e) => setPassword(e.target.value)} />
        <button className='bg-gray-800 border-style:solid border-color: var(--color-white) text-white text-lg p-3 rounded' onClick={handleSubmit}> Login </button>

    </div>

  )
}

export default LoginForm