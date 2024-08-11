import React, { useState } from "react";

const PaymentMethodComponent = ({ isVisible, onClose }) => {
    const [activeTab, setActiveTab] = useState('card');  // 'card' or 'bank'

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md mx-4">
                <div className="flex justify-between">
                    <button className={activeTab === 'card' ? "active-tab" : ""} onClick={() => setActiveTab('card')}>Card</button>
                    <button className={activeTab === 'bank' ? "active-tab" : ""} onClick={() => setActiveTab('bank')}>Bank Transfer</button>
                </div>
                {activeTab === 'card' ? (
                    <form className="space-y-4 mt-4">
                        <input placeholder="Name" type="text" className="input-field"/>
                        <input placeholder="Card number" type="text" className="input-field"/>
                        <div className="flex space-x-2">
                            <input placeholder="Expiring date" type="text" className="input-field flex-1"/>
                            <input placeholder="CCV" type="text" className="input-field flex-1"/>
                        </div>
                        <button className="btn-primary">Add New Card</button>
                    </form>
                ) : (
                    <form className="space-y-4 mt-4">
                        <input placeholder="Name" type="text" className="input-field"/>
                        <input placeholder="Wallet ID" type="text" className="input-field"/>
                        <input placeholder="Amount" type="text" className="input-field"/>
                        <button className="btn-primary">Continue</button>
                    </form>
                )}
                <button onClick={onClose} className="btn-secondary">Close</button>
            </div>
        </div>
    );
};

export default PaymentMethodComponent;  // Make sure this is at the bottom of the file
