import React, { useEffect, useState } from "react";
import wifiImage from "../../assets/wifi.svg";
import plusImage from "../../assets/plus.svg";

const TotalAmountCard = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    card: {
      backgroundColor: '#1e40af', // Tailwind blue-800
      color: 'white',
      borderRadius: '0.5rem', // Tailwind rounded-lg
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: isDesktop ? '1.5rem' : '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: isDesktop ? '20rem' : 'auto',
      maxWidth: isDesktop ? '30rem' : 'none'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      marginTop: '1.25rem',
    },
    title: {
      fontSize: isDesktop ? '1.25rem' : '1rem', // Larger on desktop
      fontWeight: '600',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
    },
    amount: {
      fontSize: isDesktop ? '5rem' : '2.5rem', // Larger on desktop
      fontWeight: '700',
    },
    footer: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      marginBottom: '1.25rem',
    },
    topUpText: {
      fontSize: isDesktop ? '1.25rem' : '1rem', // Larger on desktop
      fontWeight: '600',
      marginRight: '0.5rem',
    },
    topUpButton: {
      backgroundColor: 'white',
      color: '#1e40af', // Tailwind blue-800
      borderRadius: '9999px', // Full roundness
      padding: '0.25rem',
      marginRight: '1rem',
    },
    icon: isDesktop ? { width: '46px', height: '32px' } : { width: '24px', height: '24px' },
    plusIcon: isDesktop ? { width: '30px', height: '30px' } : { width: '23px', height: '23px' }
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.title}>Total amount</div>
        <img src={wifiImage} alt="WiFi" style={styles.icon} />
      </div>
      <div style={styles.content}>
        <span style={styles.amount}>₦ 0.00</span>
      </div>
      <div style={styles.footer}>
        <span style={styles.topUpText}>Top-Up</span>
        <button style={styles.topUpButton}>
          <img src={plusImage} alt="Plus" style={styles.plusIcon} />
        </button>
      </div>
    </div>
  );
};

export default TotalAmountCard;
