import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { FaGoogle } from 'react-icons/fa';

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)


    const handleGoogleSignIn = () => {
        googleLogin().then(loggedUser => {
            console.log(loggedUser.user)
            const saveUser={name:loggedUser?.user?.displayName,email:loggedUser?.user?.email, img:loggedUser?.user?.photoURL
            }
            fetch('https://collage-booking-server-md-hasan-akon1.vercel.app/setUser', {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            }).then(res => res.json()).then(data => console.log(data))
        })
    }
    return (
        <div>
            <div className="w-full text-center ">

                <button onClick={handleGoogleSignIn} className="btn btn-outline text-center    lg:w-full  lg:ms-0  "><FaGoogle className='m-2' /> Continue With Google</button>

            </div>
        </div>
    );
};

export default GoogleLogin;