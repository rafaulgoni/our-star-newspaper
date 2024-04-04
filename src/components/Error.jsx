import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="container mx-auto">
            <img className="w-full" src={'https://i.ibb.co/8Y1nfZy/how404.webp'} alt="" />
            <div className="text-center">
                <Link><button className="btn w-full bg-violet-700 text-white font-bold">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;