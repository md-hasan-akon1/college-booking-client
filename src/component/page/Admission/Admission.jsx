import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Admission = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://collage-booking-server-md-hasan-akon1.vercel.app/allCard')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    console.log(card)
    return (
        <div className="lg:w-[1280px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">

                {
                    card.map((item, index) => <div key={index} data-aos="flip-right" data-aos-duration="3000" className="relative transition duration-300 hover:-translate-y-3 rounded-lg p-4 shadow-xl">
                        <div className="overflow-hidden w-full h-60 bg-base-100 ">
                            <img className="object-cover h-full w-full" src={item.collegeImage
                            } alt="" />

                        </div>
                        <h2 className="text-3xl font-bold text-center">{item.collegeName}</h2>
                        <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0 rounded-lg">
                            <div className=" w-full flex justify-center items-center ">
                                <Link to={`/admissionFrom/${item._id}`} target="blank">  <button className="btn btn-secondary mt-[50%] ">Admission Form</button></Link>

                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Admission;