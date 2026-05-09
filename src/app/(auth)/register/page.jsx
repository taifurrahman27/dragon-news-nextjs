"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleRegister = async (data) => {
        const { name, email, photoUrl, password } = data;
        const { data: res, error } = await authClient.signUp.email({

            name: name,
            email: email,
            password: password,
            image: photoUrl,
            callbackURL: "http://localhost:3000/login"

        })

        if (error) {
            alert("Registration failed: " + error.message);
        } else {
            alert("Registration successful!");
        }

    };

    return (
        <div className="container mx-auto min-h-80 flex items-center justify-center bg-slate-100 py-10">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Welcome to the Register page
                </h1>

                <form onSubmit={handleSubmit(handleRegister)} className="pb-10 border shadow-2xl">

                    <fieldset className="fieldset border-base-300 rounded-box border p-4">
                        <legend className="fieldset-legend text-2xl font-bold">
                            Register
                        </legend>

                        <label className="label">Enter Your Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            {...register("name", { required: true })}
                            placeholder="Name"
                        />
                        {errors.name && <p className="text-red-500">Name is required</p>}
                    </fieldset>
                    <fieldset className="fieldset border-base-300 rounded-box border p-4">

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

                        <label className="label">Photo URL</label>
                        <input
                            type="url"
                            className="input w-full"
                            {...register("photoUrl", { required: true })}
                            placeholder="Enter Photo URL"
                        />
                        {errors.photoUrl && <p className="text-red-500">Photo URL is required</p>}
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
                        {errors.password && <p className="text-red-500">Password is required</p>}

                        <button type="submit" className="btn btn-neutral mt-4">
                            Register
                        </button>
                    </fieldset>

                    <p className="text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;