import { useEffect, useState } from "react";
import Card from "../../Card/Card";



const CollageCard = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://collage-booking-server-md-hasan-akon1.vercel.app/card')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-[1280px] mx-auto" >
            {
                card?.map(item => <Card key={item._id} item={item}></Card>

                )
            }
        </div>
    );
};

export default CollageCard;