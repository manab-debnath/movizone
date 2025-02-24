"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#1B1B1B] p-4">
			<div className="bg-[#222222] text-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold text-center text-red-500">
					Create an Account
				</h2>
				<p className="text-gray-400 text-center mt-2">
					Sign up to get started!
				</p>

				<form className="mt-6">
					<div className="mb-4">
						<label className="block text-sm font-medium mb-1">Full Name</label>
						<input
							type="text"
							placeholder="Enter your full name"
							className="input input-bordered w-full bg-[#333333] text-white border-none focus:ring-2 focus:ring-red-500"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium mb-1">Email</label>
						<input
							type="email"
							placeholder="Enter your email"
							className="input input-bordered w-full bg-[#333333] text-white border-none focus:ring-2 focus:ring-red-500"
						/>
					</div>

					<div className="mb-4 relative">
						<label className="block text-sm font-medium mb-1">Password</label>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Enter your password"
							className="input input-bordered w-full bg-[#333333] text-white pr-10 border-none focus:ring-2 focus:ring-red-500"
						/>
						<button
							type="button"
							className="absolute right-3 top-1/2 text-gray-400"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <EyeOff /> : <Eye />}
						</button>
					</div>

					<button className="btn w-full mt-4 bg-red-500 border-none hover:bg-red-600">
						Sign Up
					</button>
				</form>

				<p className="text-gray-400 text-center mt-4">
					Already have an account?{" "}
					<Link href="/login" className="text-red-500 hover:underline">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}
