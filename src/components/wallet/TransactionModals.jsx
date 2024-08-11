import React, { useState } from 'react';
import CreatePinModal from './CreatePinModal';
import ConfirmTransactionModal from './ConfirmTransactionModal';
import SuccessModal from './SuccessModal';

const TransactionManager = () => {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [pinCreated, setPinCreated] = useState(false);
  const [transactionConfirmed, setTransactionConfirmed] = useState(false);
  
  const handlePinChange = (value, field) => {
    if (field === 'pin') setPin(value);
    else if (field === 'confirmPin') setConfirmPin(value);
  };

  const resetTransaction = () => {
    setPin('');
    setConfirmPin('');
    setPinCreated(false);
    setTransactionConfirmed(false);
  };

  return (
    <div>
      {!pinCreated &&
        <CreatePinModal
          isOpen={!pinCreated}
          onPinCreated={() => setPinCreated(true)}
          onPinChange={handlePinChange}
          pin={pin}
          confirmPin={confirmPin}
        />
      }
      {pinCreated && !transactionConfirmed &&
        <ConfirmTransactionModal
          isOpen={pinCreated && !transactionConfirmed}
          onConfirm={() => setTransactionConfirmed(true)}
          transactionAmount={50000}
          recipient="Ikenna Michael"
        />
      }
      {transactionConfirmed &&
        <SuccessModal
          isOpen={transactionConfirmed}
          onReset={resetTransaction}
        />
      }
    </div>
  );
};

export default TransactionManager;
