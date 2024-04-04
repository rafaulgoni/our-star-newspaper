import BreakingNews from "./shered/BreakingNews";
import Header from "./shered/Header/Header";
import Navbar from "./shered/Navbar/Navbar";
import LeftSite from "./shered/leftSite/LeftSite";
import RightSiteNav from "./shered/rightsite/RightSiteNav";

const Home = () => {
    return (
        <div>
            <div className="mb-10">
                <Header></Header>
            </div>
            <BreakingNews></BreakingNews>
            <div>
                <Navbar></Navbar>
            </div>
            <div className=" grid lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSite></LeftSite>
                </div>
                <div className="border lg:col-span-2">
                    <h1 className=" text-4xl">
                        boss
                    </h1>
                </div>
                <div className="border">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;