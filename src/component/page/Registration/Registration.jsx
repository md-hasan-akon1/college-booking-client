import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { stringify } from "postcss";
import { Link } from "react-router-dom";
import GoogleLogin from "../../Sheared/GoogleLogin/GoogleLogin";


const Registration = () => {
    const api_key = import.meta.env.VITE_IMG_KEY;
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${api_key}`
    const { user, updateUser, singUp,loading } = useContext(AuthContext)
    const [error, setEror] = useState(null)

    const [password, setPassword] = useState('')
    const handelPassword = (e) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword)
        console.log(inputPassword)
        if (inputPassword.length < 8) {
            return setEror('password must be 8 charecters')
        }
        else if (!/^(?=.*?[A-Z])/.test(inputPassword)) {
            return setEror('At least one upper letter')
        }
        else if (!/(?=.*?[a-z])/.test(inputPassword)) {
            return setEror('At least one lower letter')
        }
        else if (!/(?=.*\W)/.test(inputPassword)) {
            return setEror('At least one special symbol')
        }
        else {
            setEror('')
        }
    }
    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.img.files[0];
        const email = form.email.value;
        const password = form.password.value;
        const conPass = form.conPass.value;
        if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email)) {
            return setEror('please enter validate email')
        }
        else if (password !== conPass) {
            return setEror('password did not match')
        }
        else {
            singUp(email, password)
                .then(() => {
                    setEror('')
                    form.reset()
                    setPassword('')
                    const formData = new FormData();
                    formData.append('image', photo)
                    fetch(uploadUrl, {
                        method: 'POST',
                        body: formData
                    }).then(res => res.json())
                        .then(data => {
                            updateUser(name,data.data.display_url).then(() => {
                       
                            }).catch(error => console.log(error))
                            const saveUser = {
                                name, email, img: data.data.display_url
                            }
                            fetch('https://collage-booking-server-md-hasan-akon1.vercel.app/setUser', {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            }).then(res => res.json()).then(data => console.log(data))
                        })
                        .catch(error => console.log(error.massage))
                  

                }).catch(error => console.log(error.massage))
        }



    }
    return (
        <div className="bg-green-500 h-screen pt-[3%]">
            <div className="card w-96 glass mx-auto ">
                <div className="card-body border border-red-600">
                   
                    <form onSubmit={handelLogin}>

                        <div>
                            <label>Your Name</label>
                            <input type="text" placeholder="Type here" name="name" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <div>
                            <label>Your Photo</label>
                            <input type="file" name="img" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                        </div>
                        <div>
                            <label>Your Email</label>
                            <input type="email" placeholder="Type here" name="email" className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password"
                                onChange={handelPassword}
                                value={password}
                                placeholder="Type here"
                                name="password"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <div>
                            <label>Confirm password</label>
                            <input type="password"
                                placeholder="Type here"
                                name="conPass"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                        </div>
                        <p>{error}</p>
                      
                        <button disabled={loading} className="btn btn-secondary w-full mt-4"><input type="submit" value="Registration" /></button>
                        <p>Already Have an account <Link to='/login' className="text-blue-600">LogIn</Link></p>
                    </form>
                    <div className="divider">OR</div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Registration;