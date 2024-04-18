'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      
      name,
      surname,
      email,
      phone_number,
      date_of_birth,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`
      }

    })
    router.refresh()
    setName('')
    setSurname('')
    setEmail('')
    setPhone_number('')
    setDate_of_birth('')
    setPassword('')
  }


  return (
    <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
    <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
    
    <input 
        type="text" 
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
    <input 
    type="text" 
    name="surname"
    value={surname}
    onChange={(e) => setSurname(e.target.value)}
    placeholder="Surname"
    className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
/>
    
    

<input 
        type="email" 
        name="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />

    <input 
        type="number" 
        name="phone number"
        value={phone_number}
        onChange={(e) => setPhone_number(e.target.value)}
        placeholder="Phone number"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
<input 
        type="date" 
        name="date of birth"
        value={date_of_birth}
        onChange={(e) => setDate_of_birth(e.target.value)}
        placeholder="Date of birth"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />

    <input 
        type="password" 
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
    />
    <button 
        onClick={handleSignUp}
        className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
    >
        Sign Up
    </button>
    
    </div>
    </main>
)



  
}

