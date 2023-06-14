import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../Hooks/classCart";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const Classes = ({ classItem }) => {
    const { currentUser } = useContext(Authcontext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const { name, price, instructor, image, availableSeats, _id } = classItem;
    const handleClassAddToCart = (item) => {
        console.log(item);
        if (currentUser && currentUser.email) {
            const cartItem = {
                addedClassId: _id,
                name,
                image,
                price,
                availableSeats,
                instructor,
                email: currentUser.email,
            };
            fetch("http://localhost:5000/classesCart", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Class added on the cart.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Please login to Purchase this class",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Snap School | Classes</title>
            </Helmet>
            <motion.div
                className={`border rounded relative shadow-sm p-4 mb-4 ${availableSeats === 0 ? "bg-red-100" : "bg-white"
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                 <Fade when={isLoaded}>
                <motion.img
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded mb-4"
                    onLoad={() => setIsLoaded(true)}
                />
                </Fade>
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600">
                    Instructor: <span className="font-bold">{instructor}</span>
                </p>
                <p className="text-gray-600">
                    Available Seats: <span className="font-bold"> {availableSeats}</span>
                </p>
                <p className="text-white px-4 absolute top-5 bg-red-500 right-5">
                    <span className="font-bold">{price}$</span>{" "}
                </p>
                <button
                    onClick={() => handleClassAddToCart(classItem)}
                    disabled={availableSeats === 0}
                    className={`rounded-md bg-orange-500 text-white px-4 py-2 mt-4 ${availableSeats === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {availableSeats === 0 ? "Unavailable" : "Select"}
                </button>
            </motion.div>
        </div>
    );
};

export default Classes;
