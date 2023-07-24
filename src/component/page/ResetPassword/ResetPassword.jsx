import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";


const ResetPassword = () => {
    const {user,resetPassword,loading}=useContext(AuthContext)
    const [error, setError] = useState('')
    const handelResetPass = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        resetPassword(email)
    }
    return (
        <div>
          <div className="bg-green-500 h-screen pt-[3%]">
            <div className="card w-96 glass mx-auto ">
                <div className="card-body border border-red-600">
                <h2 className="text-3xl font-bold text-center">Forgot password</h2>
                    <form onSubmit={handelResetPass}>
                        <div>
                            <label>Your Email</label>
                            <input type="email" placeholder="Type here" name="email" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <p>{error}</p>
                        <button disabled={loading} className="btn btn-secondary w-full mt-4"><input type="submit" value="Send" /></button>
                  
                    </form>
                
               
                </div>
            </div>
        </div>
        </div>
    );
};

export default ResetPassword;