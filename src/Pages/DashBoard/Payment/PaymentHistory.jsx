import React, { useEffect, useState } from 'react';

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${currentUser.email}`)
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
      <h2>Payment History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Price</th>
            {/* Add other table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map(payment => (
            <tr key={payment.transactionId}>
              <td>{payment.date}</td>
              <td>{payment.transactionId}</td>
              <td>{payment.price}</td>
              {/* Add other table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
