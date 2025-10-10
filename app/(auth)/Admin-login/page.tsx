"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const router = useRouter()
const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const handleLogin = async () => {
        setLoading(true)
        setError('')

        try {
            const res = await fetch("https://localhost:5000/api/users/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            },

            )
            const data = await res.json()
            if (!data.ok) {
                throw new Error(data.error || "Invalid")
            }
            localStorage.setItem('adminToken', data.token)
            router.push('/admin')
        }
        catch (err: any) {
            setError(err.message || "something went wrong")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="px-14 py-10" >
            <form className="w-full">
                <h1 className="text-center font-semibold text-green-500 text-2xl mb-6">Welcome Back To admin' Login</h1>
                <div className="items-center flex justify-center border-1 h-10 rounded-md bg-gray-50 mb-6">
                    <div className="flex gap-3">
                        <Image src='/img/google.jfif' alt="google img" height={20} width={25} />
                        <h1 className="cursor-pointer">Sign in with Google</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3 mb-10">
                    <div className="h-[1px] bg-black w-65"></div>
                    <p>Or</p>
                    <div className="h-[1px] bg-black w-65"></div>
                </div>
                <div className="space-y-4 mb-10">
                    <div className="flex flex-col space-y-1 mb-10">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="border border-gray-300 px-3 py-3 rounded outline-0" onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="border border-gray-300 px-3 py-3 rounded outline-0" onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="text-end text-sm text-green-500 cursor-pointer">forgot password?</p>
                    </div>
                </div>
                <button className="text-white font-semibold mb-5 w-full bg-green-500  py-2 rounded px-3 cursor-pointer">Login</button>
                <p className="text-sm text-center">Don't have an account? <span className="text-green-500 cursor-pointer">SignUp</span></p>
            </form>
        </div>

    );
}

export default Page;