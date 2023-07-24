import { Link } from "react-router-dom";
import GoogleLogin from "../../Sheared/GoogleLogin/GoogleLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";


const Login = () => {
    const [error,setError]=useState('')
const {user,loading,login,}=useContext(AuthContext)
    const handelLogin=(event)=>{
        event.preventDefault();
        const form = event.target; 
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
    }
    return (
        <div>
             <div className="bg-green-500 h-screen pt-[3%]">
            <div className="card w-96 glass mx-auto ">
                <div className="card-body border border-red-600">
                    <form onSubmit={handelLogin}>
                        <div>
                            <label>Your Email</label>
                            <input type="email" placeholder="Type here" name="email" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password"
                                placeholder="Type here"
                                name="password"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <p>{error}</p>
                     <Link to='/resetpass' className="font-semibold">Forgot password?</Link>
                        <button disabled={loading} className="btn btn-secondary w-full mt-4"><input type="submit" value="LogIn" /></button>
                        <p>Don't Have an account <Link to='/registration' className="text-blue-600">Registration</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;