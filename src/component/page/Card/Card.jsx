import { Link } from "react-router-dom";



const Card = ({ item }) => {
    const { collegeImage, collegeName, admissionDates, events, researchHistory, sports, _id
    } = item;
    //     const [event,setEvent]=useState([])
    //   useEffect(()=>{
    //     for(let event of events){
    //         setEvent(event)
    //         //event
    //         console.log(event)
    //     }
    //   },[events])
    return (
        <div className="card w-96 glass ">
            <figure><img className="w-full h-80" src={collegeImage} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{console.log(item
                )}</h2>
                <h2 className="card-title">{collegeName}</h2>
                <p> {researchHistory}</p>
                <p>Admission Last Date: {admissionDates
                }</p>
                <p className="flex justify-center items-center "><span className="text-lg font-semibold mr-2">sports:</span> {sports.map((sport, index) => <p key={index} >  {sport}</p>)}</p>

                <p className="flex justify-center items-center"><span className="text-lg font-semibold mr-2">events:</span>{events.map((event, index) => <p key={index} >{event}</p>)}</p>

                <div className="card-actions justify-end">
                    <Link to={`/${_id}`}><button className="btn btn-secondary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;