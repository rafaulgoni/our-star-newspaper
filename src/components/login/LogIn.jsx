import { Link, useLocation, useNavigate} from "react-router-dom";
import Navbar from "../../pages/shered/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const LogIn = () => {
    const {signIn}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogIn = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogIn} className="card-body">
                                <h1 className="text-2xl font-bold">Login your account</h1>
                                <hr />
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#403F3F] text-white">Register</button>
                                </div>
                                <p>Do not Have An Account ? <Link to='/register' className=" text-blue-700 font-bold">Register</Link></p>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;