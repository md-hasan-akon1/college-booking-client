import { Link } from "react-router-dom";


const Research = () => {
    return (
        <div className="lg:w-[1280px] mx-auto">
         
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6 ">

                <div data-aos="flip-right" data-aos-duration="3000" className="relative transition duration-300 hover:-translate-y-3 ">
                    <div className="overflow-hidden w-full h-60 bg-base-100 shadow-xl">
                        <img className="object-cover " src="https://i.ibb.co/0VTNJSS/Screenshot-2023-07-23-170151.png" alt="" />

                    </div>
                    <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0">
                        <div className=" w-full flex justify-center items-center ">
                            <Link to='https://www.homeworkhelpglobal.com/us/blog/research-topics-for-college-students/' target="blank">  <button className="btn btn-secondary mt-[50%] ">View full research</button></Link>
                          
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="3000"  className="relative transition duration-300 hover:-translate-y-3">
                    <div className="overflow-hidden w-full h-60 bg-base-100 shadow-xl">
                        <img className="object-cover" src="https://i.ibb.co/ZznfK9h/Screenshot-2023-07-23-170239.png" alt="" />

                    </div>
                    <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0">
                        <div className=" w-full flex justify-center items-center ">
                        <Link to='https://www.lemoyne.edu/Academics/Career-Preparation/Research-Opportunities' target="blank">  <button className="btn btn-secondary mt-[50%] ">View full Research</button></Link>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="3000"  className="relative transition duration-300 hover:-translate-y-3">
                    <div className="overflow-hidden w-full h-60 bg-base-100 shadow-xl">
                        <img className="object-cover" src="https://i.ibb.co/q5HxGZt/Screenshot-2023-07-23-170254.png" alt="" />

                    </div>
                    <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0">
                        <div className=" w-full flex justify-center items-center ">
                        <Link to='https://www.ivywise.com/ivywise-knowledgebase/resources/article/how-to-research-a-college-effectively/' target="blank">  <button className="btn btn-secondary mt-[50%] ">View full Research</button></Link>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="3000"  className="relative transition duration-300 hover:-translate-y-3">
                    <div className="overflow-hidden w-full h-60 bg-base-100 shadow-xl">
                        <img className="object-cover" src="https://i.ibb.co/Xk90bGs/Screenshot-2023-07-23-170401.png" alt="" />

                    </div>
                    <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0">
                        <div className=" w-full flex justify-center items-center ">
                        <Link to='https://www.rathinamcollege.edu.in/research-tips-every-college-student-needs-to-know/' target="blank">  <button className="btn btn-secondary mt-[50%] ">View full Research</button></Link>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-right" data-aos-duration="3000"  className="relative transition duration-300 hover:-translate-y-3">
                    <div className="overflow-hidden w-full h-60 bg-base-100 shadow-xl">
                        <img className="object-cover" src="https://i.ibb.co/26fgXrv/Screenshot-2023-07-23-170314.png" alt="" />

                    </div>
                    <div className="overflow-hidden  opacity-0 hover:opacity-100  bg-black bg-opacity-60 transition duration-1000 absolute inset-0">
                        <div className=" w-full flex justify-center items-center ">
                        <Link to='https://studycorgi.com/blog/research-topics-for-college-students/' target="blank">  <button className="btn btn-secondary mt-[50%] ">View full Research</button></Link>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Research;