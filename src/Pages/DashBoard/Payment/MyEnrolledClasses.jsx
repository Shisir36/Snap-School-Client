import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Provider/AuthProvider";


const MyEnrolledClasses = () => {
    const [enrolled, setEnrolled] = useState([]);
    const { currentUser } = useContext(Authcontext);
    useEffect(() => {
        fetch(`http://localhost:5000/enrolledclasses?email=${currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEnrolled(data);
            })
    }, [])
    return (

        <div className="w-3/4 ml-20 bg-cyan-400">
            <div className="overflow-x-auto">
                <h1 className="text-center text-4xl font-semibold text-cyan-600 pb-4">My enrolled classes</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-bold text-lg">
                                SL.
                            </th>
                            <th className="font-bold text-lg">Image</th>
                            <th className="font-bold text-lg">Book</th>
                            <th className="font-bold text-lg">Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((item, index) => <tr key={item._id}>
                                <td className="font-bold text-lg">
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="font-bold text-lg">
                                    {item.itemNames}
                                </td>
                                <td className="font-bold text-lg">{item.price}$</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;