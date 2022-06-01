import React, { useState } from "react";
import { useRouter  } from "next/router";
import { supabase } from "../src/util/SupabaseClient";


const SignUp = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if(error) {
            alert(JSON.stringify(error))
        } else {
            router.push('/signin');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-800">
            <div className="max-w-lg w-full">
                <h1 className="text-3xl font-semibold text-center text-white">
                    Create new account
                </h1>

                <form className="mt-2 flex flex-col p-6" onSubmit = {handleSubmit}>
                    <label htmlFor="email" className="text-gray-200">
                        Email
                    </label>
                    <input type="email" className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />

                     <label htmlFor="password" className="mt-6 text-gray-200">
                         Password
                     </label>
                     <input type="password" className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
                     id="password"
                     value={password}
                     onChange={(e) => setEmail(e.target.value)}
                     />

                     <button 
                     className="mt-10 text-lg text-white font-smeibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
                     type="submit">
                         Sign up
                     </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp