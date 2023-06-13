// import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../Hooks/classCart";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
    const [classCart, refetch] = useCart();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to delete this class?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/classesCart/${item._id}`, {
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
      }
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
                                    <button onClick={ () => handleDelete(Class)}  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
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