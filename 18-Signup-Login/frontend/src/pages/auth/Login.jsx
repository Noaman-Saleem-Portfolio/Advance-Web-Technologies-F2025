import { useState } from "react"
import { Link } from "react-router"

const Login = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData((pre) => {
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full max-w-xl border p-4">
                {/* <legend className="fieldset-legend">Signup Form</legend> */}

                <label className="label">Email</label>
                <input value={formData.email} name="email" type="email" className="input w-full" onChange={(e) => handleChange(e)} />

                <label className="label">Password</label>
                <input value={formData.password} name="password" type="password" className="input w-full" onChange={(e) => handleChange(e)} />

                <button type="button" className="btn btn-neutral mt-4" onClick={handleSubmit}  >Login
                </button>

                <Link to={"/signup"} className="btn btn-ghost mt-1" type="reset">Don't have an account <span className="text-primary">Signup</span></Link>

                {/* {isError && <p className="text-red-500 mt-2">{error.response.data.message}</p>} */}
            </fieldset>
            {/* <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input validator" placeholder="Email" required />
                    <p className="validator-hint hidden">Required</p>
                </fieldset>

                <label className="fieldset">
                    <span className="label">Password</span>
                    <input type="password" className="input validator" placeholder="Password" required />
                    <span className="validator-hint hidden">Required</span>
                </label>

                <button className="btn btn-neutral mt-4" type="submit">Login</button>
                <Link to={"/signup"} className="btn btn-ghost mt-1" type="reset">Don't have account <span className="text-primary">Signup</span></Link>
            </form> */}
        </div>
    )
}

export default Login
