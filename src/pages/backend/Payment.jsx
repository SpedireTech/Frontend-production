import React, { useState } from 'react';

function Payment() {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(5000);

    const [reference, setReference] = useState('wtur3r7ytc');
    const [paymentStatus, setPaymentStatus] = useState(null);



    const handleVerifyPayment = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/verify/${reference}`);
            const data = await response.json();

            if (response.ok) {
                setPaymentStatus(data.data); 
            } else {
                console.error('Payment verification failed', data.message);
            }
        } catch (error) {
            console.error('Error verifying payment:', error);
        }
    };

    const handlePayment = async () => {
        const response = await fetch('http://localhost:8080/api/v1/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, amount }),
        });

        const data = await response.json();
        if (data.success) {
            const authorizationUrl = data.data;
            window.open(authorizationUrl, '_blank');
        } else {
            console.error('Payment initialization failed', data.message);
        }
    };


    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <p>We found a perfect match for your package</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <button style={styles.button} onClick={handlePayment}>Pay to Proceed</button>
                <br /><br />
                <button style={styles.button} onClick={handleVerifyPayment}>Verify Payment</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    box: {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Payment;
