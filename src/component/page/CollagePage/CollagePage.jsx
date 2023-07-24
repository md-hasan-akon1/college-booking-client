import { useEffect, useState } from "react";
import PageCard from "./PageCard";


const CollagePage = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://collage-booking-server-md-hasan-akon1.vercel.app/allCard')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:w-[1280px] mx-auto" >
            {
                card?.map(item => <PageCard key={item._id} item={item}></PageCard>

                )
            }
        </div> 
        </div>
    );
};

export default CollagePage;