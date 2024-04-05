import { useParams } from "react-router-dom";
import Header from "./shered/Header/Header";
import Navbar from "./shered/Navbar/Navbar";
import RightSiteNav from "./shered/rightsite/RightSiteNav";


const News = () => {
    const {id}  =useParams()
    return (
        <div>
            <Header></Header>
            <div>
                <Navbar></Navbar>
            </div>
            <div className=" grid lg:grid-cols-4">
                <div className=" lg:col-span-3">
                    <p>{id}</p>
                    <p></p>

                </div>
                <div className="lg:col-span-1">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default News;