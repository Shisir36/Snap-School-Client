
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const Payment = () => {
    const [payment, setPayment] = useState([])
    const {id} = useParams()
    useEffect(()=>{
       fetch(`https://snap-school-server-shisir36.vercel.app/myClassCart/${id}`)
       .then(res => res.json())
       .then(data => {
        console.log(data);
        setPayment(data)
       })
    }, [payment])
    return (
        <div>
            <p className=" text-4xl text-center ">Price: <span className="text-orange-500 font-bold">{payment.price}</span></p>
            <Elements stripe={stripePromise}>
                <CheckoutForm payment={payment} price={payment.price} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;