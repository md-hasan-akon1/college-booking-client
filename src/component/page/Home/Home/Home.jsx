import Banner from "../Banner/Banner";
import CollageCard from "../CollageCard/CollageCard";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="mt-8 text-xl font-semibold text-center">Our Collage</h1>
            <p className="my-2 text-xl text-center">choose your favorite collage</p>
            <CollageCard></CollageCard>
            <h1 className="mt-8 text-xl font-semibold text-center">Our Gallery</h1>
            <p className="my-2 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <Gallery></Gallery>
            <h1 className="mt-8 text-xl font-semibold text-center">Our Students Research</h1>
            <p className="my-2 text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <Research></Research>
        </div>
    );
};

export default Home;