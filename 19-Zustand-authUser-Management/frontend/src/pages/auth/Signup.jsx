import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../../api/axios";

import { useAuthStore } from "../../store/useAuthStore";
import LoadingSpinner from "../../components/LoadingSpinner";

const Signup = () => {
  const { signup, isSigningUp } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await signup(formData);
      navigate("/");
    } catch (error) {
      console.log(error);
      // Do nothing: error toast already shown
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full max-w-xl border p-4">
        {/* <legend className="fieldset-legend">Signup Form</legend> */}
        <label className="label">Full Name</label>
        <input
          name="fullName"
          type="text"
          className="input w-full"
          onChange={(e) => handleChange(e)}
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          onChange={(e) => handleChange(e)}
        />

        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          onChange={(e) => handleChange(e)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleSubmit}>
          {isSigningUp ? <LoadingSpinner /> : "Signup"}
        </button>

        <Link to={"/login"} className="btn btn-ghost mt-1" type="reset">
          Already have an account <span className="text-primary">Signin</span>
        </Link>
      </fieldset>
      {/* <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input validator" placeholder="Email" required />
                    <p className="validator-hint hidden">Required</p>
                </fieldset>

                <label className="label">Full Name</label>
                <input name="fullName" type="text" className="input w-full" />

                <label className="fieldset">
                    <span className="label">Password</span>
                    <input type="password" className="input validator" placeholder="Password" required />
                    <span className="validator-hint hidden">Required</span>
                </label>

                <button className="btn btn-neutral mt-4" type="submit">Signup</button>

                <Link to={"/login"} className="btn btn-ghost mt-1" type="reset">Already have an account <span className="text-primary">Signin</span></Link>
            </form> */}
    </div>
  );
};

export default Signup;
