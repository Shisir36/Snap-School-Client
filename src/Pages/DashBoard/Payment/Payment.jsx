import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/classCart";
import CheckoutForm from "./CheckOutForm/CheckoutForm";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;