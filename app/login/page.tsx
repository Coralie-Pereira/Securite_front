'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function LoginPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const supabase = createClientComponentClient();

  // useEffect(() => {
  //   // Écouter l'événement d'authentification réussie
  //   const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
  //     if (event === 'SIGNED_IN') {
  //       console.log('Connexion réussie !');
  //       // Vous pouvez également rediriger l'utilisateur vers une autre page ici si nécessaire
  //     }
  //   });

  // }, []);


  const handleSignIn = async () => {
    await supabase.auth.signUp({
      email,
      password,
    });
    router.refresh();
    setEmail('');
    setPassword('');
  };


  return (
    <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
        <input 
          type="email" 
          name="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
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
          onClick={handleSignIn}
          className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
        >
          Log in
        </button>
      </div>
    </main>
  );
}
