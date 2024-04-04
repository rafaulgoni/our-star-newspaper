import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";


import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSiteNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-8">
                <h1 className="text-3xl font-bold">Login With</h1>
                <button className="btn btn-outline w-full text-blue-800">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-8">
                <h1 className="text-3xl font-bold">Find us on</h1>
                <a className="flex items-center p-4 text-lg border rounded-t-lg" href="https://www.facebook.com/profile.php?id=100095020571122&mibextid=ZbWKwL">
                    <FaFacebook className="mr-3 text-blue-700">
                    </FaFacebook>
                    Facebook
                </a>
                <a className="flex items-center p-4 text-lg border-x" href="">
                    <FaTwitter className="mr-3 text-blue-300">
                    </FaTwitter>
                    Twitter
                </a>
                <a className="flex items-center p-4 text-lg border rounded-b-lg" href="">
                    <FaInstagram className="mr-3 text-[#C48A7D]">
                    </FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="p-4 space-y-3 mb-8">
                <h1 className="text-3xl font-bold">Q-Zone</h1>
                    <img className="w-full" src={qZone1} alt="" />
                    <img className="w-full" src={qZone2} alt="" />
                    <img className="w-full" src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSiteNav;