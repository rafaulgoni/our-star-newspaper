import { useParams } from "react-router-dom";
import Header from "./shered/Header/Header";
import Navbar from "./shered/Navbar/Navbar";
import RightSiteNav from "./shered/rightsite/RightSiteNav";
import { useLoaderData } from 'react-router-dom'



const News = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const newsDetails = details.find(newDetails => newDetails._id == id);

    return (
        <div>
            <Header></Header>
            <div>
                <Navbar></Navbar>
            </div>

            <div className=" grid lg:grid-cols-4">
                <div className=" lg:col-span-3">
                    <h1 className='text-2xl font-semibold'>Dragon News</h1>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={newsDetails.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{newsDetails.title}</h2>
                            <p>{newsDetails.details}</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default News;