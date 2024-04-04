
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSite = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <div className="p-4 space-y-3 mb-8">
                <h1 className="text-2xl font-semibold">All Caterogy</h1>
                <h1 className="p-4 bg-gray-200 font-bold text-center">International News</h1>
                {
                    categories.map(category => <NavLink className="block ml-6 font-semibold" to={`category/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default LeftSite;