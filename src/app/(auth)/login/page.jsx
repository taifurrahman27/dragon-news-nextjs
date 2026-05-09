"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleLogin = async (data) => {
        const { data: signInData, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/"
        });

        if (error) {
            alert("Login failed: " + error.message);
        } else {
            alert("Login successful!");
        }

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

                        <div className="relative">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="input w-full pr-10"
                                {...register("password", { required: true })}
                                placeholder="Enter Your Password"
                            />

                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        {errors.password && (
                            <p className="text-red-500">Password is required</p>
                        )}
                    </fieldset>

                    <button type="submit" className="btn btn-neutral w-11/12 mx-4 my-4">
                        Login
                    </button>

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