
import { useContext, useState } from 'react';
import { Authcontext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaCamera } from 'react-icons/fa';

const AddClass = () => {
    const [name, setClassName] = useState('');
    const [image, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState(0);
    const [price, setPrice] = useState(0);
    const { currentUser } = useContext(Authcontext)

    const handleAddClass = (e) => {
        e.preventDefault();

        const newClass = {
            name,
            image,
            instructor: currentUser.displayName,
            email: currentUser.email,
            availableSeats,
            price,
            status: 'pending',
            totalEnrolledStudents: 0,
        };

        fetch('https://snap-school-server-shisir36.vercel.app/classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClass),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.insertedId) {
                    // Show success Swal notification
                    Swal.fire({
                        icon: 'success',
                        title: 'Class Created Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    // Show error Swal notification
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Failed to create class',
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div className="bg-gray-100 w-full px-10">
            <div className="w-full mx-auto bg-orange-400 p-6 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-6">Add a Class</h1>
                <form onSubmit={handleAddClass} >
                    <div className=' md:grid grid-cols-2 gap-10'>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="className">
                                Class Name
                            </label>
                            <input
                                id="className"
                                required
                                type="text"
                                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                                onChange={(e) => setClassName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="classImage">
                                Class Image
                            </label>
                            <input
                                id="classImage"
                                required
                                type="text"
                                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                                onChange={(e) => setClassImage(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="instructor">
                                instructor name
                            </label>
                            <input
                                type="text"
                                value={currentUser.displayName}
                                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="instructoremail">
                                Instructor Email
                            </label>
                            <input
                                type="text"
                                
                                value={currentUser.email}
                                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="availableSeats">
                                Available Seats
                            </label>
                            <input
                                id="availableSeats"
                                type="number"
                                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                                value={availableSeats}
                                onChange={(e) => setAvailableSeats(Number(e.target.value))}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                id="price"
                                required
                                type="number"
                                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className='  w-1/3 mx-auto md:pl-20 md:mt-9'>
                          
                  <input type="submit" value=" Add Class" className=" text-white px-10 py-4 bg-zinc-700 rounded-md  hover:bg-zinc-800 relative" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;