
import React, { useContext, useState } from 'react';
import { Authcontext } from '../../../Provider/AuthProvider';

const AddClass = () => {
    const [name, setClassName] = useState('');
    const [image, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState(0);
    const [price, setPrice] = useState(0);
    const {currentUser} = useContext(Authcontext)

    const handleAddClass = (e) => {
        e.preventDefault();
        // Create a class object with the form values
        const newClass = {
            name,
            image,
            instructor: currentUser.displayName,
            email: currentUser.email,
            availableSeats,
            price,
            status: 'pending',
        };

        // Make a POST request to your backend API
        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClass),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the backend
                console.log(data);

                // Clear the form fields
                setClassName('');
                setClassImage('');
                setAvailableSeats(0);
                setPrice(0);
            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });
    };

    return (
        <div className="bg-gray-100 w-full">
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-6">Add a Class</h1>
                <form onSubmit={handleAddClass}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="className">
                            Class Name
                        </label>
                        <input
                            id="className"
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
                            type="text"
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            onChange={(e) => setClassImage(e.target.value)}
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
                            type="number"
                            className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                            onChange={(e) => setPrice(Number(e.target.value))}
                        />
                    </div>
                    <input type="submit" value=" Add Class" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600" />
                    
                </form>
            </div>
        </div>
    );
};

export default AddClass;
