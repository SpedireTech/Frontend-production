import React from "react";

const Button = ({ width, text, height, loading, loadingText }) => {
  return (
    <div>
      <button
        style={{ width, height }}
        className="text-md font-hk md:text-[24px] lg:text-[20px] xl:text-[20px] bg-button text-white rounded-2xl flex justify-center items-center outline-none"
        disabled={loading} 
      >
        {loading ? (
          <>
            <span className="spinner"></span>
            {loadingText || 'Loading...'} 
          </>
        ) : (
          text
        )}
      </button>
      <style jsx>{`
        .spinner {
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          width: 16px;
          height: 16px;
          animation: spin 0.8s linear infinite;
          margin-right: 8px; 
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Button;
