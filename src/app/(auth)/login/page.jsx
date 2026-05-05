"use client";

import Link from "next/link";
import React from "react";

const LoginPage = () => {
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
    };

    return (
        <div className="container mx-auto min-h-80 flex items-center justify-center bg-slate-100 py-10">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Welcome to the Login page
                </h1>

                <form onSubmit={handleLogin} className="pb-10 border shadow-2xl">
                    <fieldset className="fieldset border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend text-2xl font-bold">
                            Login
                        </legend>

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                        />
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box border p-4">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            name="password"
                            placeholder="Enter Your Password"
                            required
                        />

                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                    </fieldset>

                    <p className="text-center">
                        Do not have an account?{" "}
                        <Link href="/register" className="text-blue-500">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;