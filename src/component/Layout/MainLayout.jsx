import { Outlet } from "react-router-dom";
import Footer from "../Sheared/Footer/Footer";
import NavigationBar from "../Sheared/NavigetionBar/NavigationBar";

const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;