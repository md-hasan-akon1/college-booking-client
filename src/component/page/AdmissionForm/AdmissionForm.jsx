import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";


const AdmissionForm = () => {
    const {user}=useContext(AuthContext)
    const { id } = useParams()
    const college=useLoaderData();
    console.log(college)
    const api_key = import.meta.env.VITE_IMG_KEY;
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${api_key}`;
    const handelSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.sub.value;
        const number = form.number.value;
        const address = form.address.value;
        const date = form.birth.value;
        const photo = form.photo.files[0]
        const formData = new FormData();
        formData.append('image', photo)
        fetch(uploadUrl, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            if (data.success) {
                const studentData = { name, email, subject, number, address, date, photo: data.data.display_url, id }
                fetch('https://collage-booking-server-md-hasan-akon1.vercel.app/admissionForm', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(studentData)
                }).then(res => res.json()).then(data => console.log(data))



            }
        })

    }
    return (
        <div className="flex justify-center items-center  bg-green-600 h-screen">
            <div className="card  glass  ">

                <div className="card-body border border-red-600 ">
                    <h2 className="text-3xl font-semibold text-center">
                       {college.collegeName} Admission Form</h2>
                    <form onSubmit={handelSubmit}>
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div>
                                <label>Your Name</label> <br />
                                <input type="text" name="name" placeholder="Type Your Name" className="input input-bordered input-secondary w-full lg:max-w-xs" />
                            </div>
                            <div>
                                <label>Subject</label><br />
                                <select name="sub" className="select select-secondary w-full lg:max-w-xs">
                                    <option disabled selected>choose favorite subject</option>
                                    <option>Mathematics</option>
                                    <option>Geography</option>
                                    <option>Biological sciences</option>
                                    <option>Economics</option>
                                    <option>Physics</option>
                                    <option>Psychology</option>
                                    <option>Chemistry</option>
                                    <option>History</option>
                                    <option>Accounting</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div>
                                <label>Email</label> <br />
                                <input type="email" value={user?.email} name="email" placeholder="Type email" className="input input-bordered input-secondary w-full lg:max-w-xs" />
                            </div>
                            <div>
                                <label>Phone Number</label> <br />
                                <input type="number" name="number" placeholder="Type here" className="input input-bordered input-secondary w-full lg:max-w-xs" />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-4">
                            <div>
                                <label>Address</label><br />
                                <input type="text" placeholder="Type here" name='address' className="input input-bordered input-secondary w-full lg:max-w-xs" />
                            </div>
                            <div>
                                <label>Date Of Birth</label><br />
                                <input type="date" placeholder="Type here" name="birth" className="input input-bordered input-secondary w-full lg:max-w-xs" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label>Your Photo</label>
                            <input type="file" name="photo" className="file-input file-input-bordered file-input-secondary w-full " />
                        </div>
                        <input type="submit" className="btn btn-secondary w-full mt-4" value="apply" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;