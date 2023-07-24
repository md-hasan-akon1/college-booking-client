
import { Link } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const PageCard = ({ item }) => {
    const { collegeImage, collegeName, admissionDates, researchHistory,  _id, rating, researchNumber
    } = item;
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
                <p> Number Of Research: {researchNumber}</p>
                <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />

                <div className="card-actions justify-end">
                    <Link to={`/page/${_id}`}><button className="btn btn-secondary">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PageCard;