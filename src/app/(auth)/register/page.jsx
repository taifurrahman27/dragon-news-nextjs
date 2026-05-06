"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (data) => {
        const { name, email, photoUrl, password } = data;
        console.log(name, email, photoUrl, password);
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
                            type="name"
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
                        <input
                            type="password"
                            className="input w-full"
                            {...register("password", { required: true })}
                            placeholder="Enter Your Password"
                        />
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