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
  const [validPassword, setValidPassword] = useState(false); // Ajout de l'état pour la validation du mot de passe
  const router = useRouter();

  const supabase = createClientComponentClient();

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

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
    });
    router.refresh();
    setName('');
    setSurname('');
    setEmail('');
    setPhone_number('');
    setDate_of_birth('');
    setPassword('');
  };

  const handlePasswordChange = (e: { target: { value: any; }; }) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValidPassword(passwordRegex.test(newPassword));
  };

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
          onChange={handlePasswordChange} // Utilisation de la fonction pour vérifier la validité du mot de passe
          placeholder="Password"
          className={`mb-4 w-full p-3 rounded-md border ${validPassword ? 'border-gray-700' : 'border-red-500'} bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500`}
        />
        {!validPassword && ( // Affichage du message d'erreur si le mot de passe n'est pas valide
          <p className="text-red-500">Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</p>
        )}
        <button 
          onClick={handleSignUp}
          disabled={!validPassword} // Désactivez le bouton tant que le mot de passe n'est pas valide
          className={`w-full mb-2 p-3 rounded-md ${validPassword ? 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
        >
          Sign Up
        </button>
      </div>
    </main>
  );
}
