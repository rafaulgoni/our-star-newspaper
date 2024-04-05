import NewsCard from "../components/news/NewsCard";
import BreakingNews from "./shered/BreakingNews";
import Header from "./shered/Header/Header";
import Navbar from "./shered/Navbar/Navbar";
import LeftSite from "./shered/leftSite/LeftSite";
import RightSiteNav from "./shered/rightsite/RightSiteNav";
import { useLoaderData } from 'react-router-dom'


const Home = () => {
    const news = useLoaderData();


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
                <div className="">
                    <LeftSite></LeftSite>
                </div>
                <div className="lg:col-span-2 space-y-5">
                    <h1 className='text-2xl font-semibold'>Dragon News</h1>
                    {
                        news.map(aNew => <NewsCard
                            key={aNew._id}
                            news={aNew}>
                        </NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;