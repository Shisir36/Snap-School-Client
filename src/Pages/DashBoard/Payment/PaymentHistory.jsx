import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const PaymentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        fetch(`https://snap-school-server.vercel.app/payments?email=${currentUser.email}`)
            .then(response => response.json())
            .then(data => {
                setPaymentHistory(data.paymentHistory);
            })
            .catch(error => {
                console.log('Error fetching payment history:', error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Item Names</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {paymentHistory.map(payment => (
                        <tr key={payment._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{payment.itemNames}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{new Date(payment.date).toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-green-500">{payment.price}$</td>
                            <td className="px-6 py-4 whitespace-nowrap">{payment.transactionId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;
