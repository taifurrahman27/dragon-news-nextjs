"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = (data) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto min-h-80 flex items-center justify-center bg-slate-100 py-10">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Welcome to the Login page
                </h1>

                <form onSubmit={handleSubmit(handleLogin)} className="pb-10 border shadow-2xl">
                    <fieldset className="fieldset border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend text-2xl font-bold">
                            Login
                        </legend>

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            {...register("email", { required: true })}
                            placeholder="Enter Your Email"
                        />
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </fieldset>

                    <fieldset className="fieldset border-base-300 rounded-box border p-4">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            {...register("password", { required: true })}
                            placeholder="Enter Your Password"
                        />
                        {errors.password && <p className="text-red-500">Password is required</p>}

                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                    </fieldset>

                    <p className="text-center">
                        Do not have an account?{" "}
                        <Link href="/register" className="text-blue-500 hover:underline">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;