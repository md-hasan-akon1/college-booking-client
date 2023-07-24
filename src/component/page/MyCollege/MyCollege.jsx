import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/Authprovider";


const MyCollege = () => {
    const [collegeData, setCollegeData] = useState({})
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://collage-booking-server-md-hasan-akon1.vercel.app/mycollege/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCollegeData(data)
                console.log(data)
            })
    }, [user?.email])
    const { admissionDates, admissionProcess, collegeImage, collegeName, eventsDetails, researchWorks, sportsCategories, eventFacilities, rating, sportsFacilities, researchHistory } = collegeData
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content  flex-col">
                    <img src={collegeImage} className="h-1/2 w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <p className="text-2xl font-bold text-center">admission Process</p>
                        <div>
                            {admissionProcess&&Object.entries(admissionProcess).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <h2>
                                            < span className="font-semibold">{key}</span>: {`${value},`}
                                        </h2>

                                        <hr />
                                    </div>
                                );
                            })}
                        </div>

                        
                        <p className="text-2xl font-bold text-center">events Details</p>
                        <div>
                            {eventsDetails&&Object.entries(eventsDetails).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <h2>
                                            < span className="font-semibold">{key}</span>: {`${value},`}
                                        </h2>

                                        <hr />
                                    </div>
                                );
                            })}
                        </div>

                      
                        <p className="text-2xl font-bold text-center">research Works</p>
                        <div>
                            {researchWorks&&Object.entries(researchWorks).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <h2>
                                            < span className="font-semibold">{key}</span>: {`${value},`}
                                        </h2>

                                        <hr />
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-2xl font-bold text-center">sports Categories</p>
                        <div>
                            {sportsCategories&&Object.entries(sportsCategories).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <h2>
                                            < span className="font-semibold">{key}</span>: {`${value},`}
                                        </h2>

                                        <hr />
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-2xl font-bold text-center">event Facilities</p>
                        <div>
                            {eventFacilities&&Object.entries(eventFacilities).map(([key, value]) => {
                                return (
                                    <div key={key}>
                                        <h2>
                                            < span className="font-semibold">{key}</span>: {`${value},`}
                                        </h2>

                                        <hr />
                                    </div>
                                );
                            })}
                        </div>

                        <p className="py-6">{researchHistory}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollege;