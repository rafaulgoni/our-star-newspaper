import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex border bg-gray-200 h-10 justify-center items-center">
            <button className="btn bg-[#D72050] btn-sm text-white">Breaking News</button>
            <Marquee className="pr-12" pauseOnHover={true} speed={100}>
                <Link to='/'>All sites under .bd domain down, BTCL taking steps to restore.</Link>
           
                <Link to='/'>Dhaka, April 3 -- All.bd domain services, which are operated by Bangladesh Telecommunications Company Ltd (BTCL), have been down since 8:40 am on Wednesday due to a technical glitch.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;