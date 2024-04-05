import { CiCalendar } from "react-icons/ci";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import one from '../../../assets/1.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'
import moment from 'moment';


const LeftSite = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="p-4 space-y-3 mb-8">
                <h1 className="text-2xl font-semibold">All Caterogy</h1>
                <h1 className="p-4 bg-gray-200 font-bold text-center">International News</h1>
                {
                    categories.map(category => <NavLink className="block ml-6 font-semibold" to={`category/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
            </div>
            <div className="space-y-4">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={one} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex">
                            <p className="font-semibold">Sports</p>
                            <p className=" flex items-center"><CiCalendar></CiCalendar> {moment().format("MMMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={two} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex">
                            <p className="font-semibold">Sports</p>
                            <p className=" flex items-center"><CiCalendar></CiCalendar> {moment().format("MMMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={three} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="flex">
                            <p className="font-semibold">Sports</p>
                            <p className=" flex items-center"><CiCalendar></CiCalendar> {moment().format("MMMM D, YYYY")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSite;