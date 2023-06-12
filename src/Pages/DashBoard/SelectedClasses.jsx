// import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../Hooks/classCart";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
    const [classCart, refetch] = useCart();
    return (
        <div className="w-full">
            {/* <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet> */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Class Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classCart.map((Class, index) => <tr
                                key={Class._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={Class.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {Class.name}
                                </td>
                                <td className="">${Class.price}</td>
                                <td></td>
                                <td><Link to={`/dashboard/payment/${Class._id}`}><button className="btn btn-warning btn-sm">PAY</button></Link></td>
                                <td>
                                    <button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;


// onClick={() => handleDelete(Class)} 