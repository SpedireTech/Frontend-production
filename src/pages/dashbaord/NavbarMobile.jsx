import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendarAlt,
  faSearch,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { getStoredItem } from "../../util/lib";
import SideBar from "../../components/sidebar/SideBar";

const NavBarMobile = () => {
  const user = getStoredItem("user");
  const [isActive, setIsActive] = useState(true);
  const [open, setOpen] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      backgroundColor: 'white'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Hamburger Menu Button */}
        <button
          id="menu-btn"
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          style={{
            outline: 'none',
            border: 'none',
            background: 'transparent'
          }}
        >
          {/* Hamburger Icon Lines */}
          <span className="hamburger-top" style={{ backgroundColor: '#000', height: '2px', width: '20px', display: 'block', marginBottom: '4px' }}></span>
          <span className="hamburger-middle" style={{ backgroundColor: '#000', height: '2px', width: '20px', display: 'block', marginBottom: '4px' }}></span>
          <span className="hamburger-bottom" style={{ backgroundColor: '#000', height: '2px', width: '20px', display: 'block' }}></span>
        </button>

        {/* Search Icon */}
        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px', color: 'gray' }} />

        {/* User Status Toggle */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#434040', marginRight: '8px' }}>
            {isActive ? "Active" : "Offline"}
          </span>
          <label style={{ position: 'relative', display: 'inline-block', width: '40px', height: '24px' }}>
            <input
              type="checkbox"
              checked={isActive}
              onChange={toggleActive}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#ccc',
              transition: '.4s',
              borderRadius: '24px',
              ...(isActive ? { backgroundColor: '#34D399' } : {})
            }}></span>
            <span style={{
              position: 'absolute',
              height: '20px',
              width: '20px',
              left: '4px',
              bottom: '2px',
              backgroundColor: 'white',
              transition: '.4s',
              borderRadius: '50%',
              ...(isActive ? { transform: 'translateX(16px)' } : {})
            }}></span>
          </label>
        </div>

        {/* Notification Bell */}
        <div style={{ position: 'relative' }}>
          <FontAwesomeIcon icon={faBell} style={{ fontSize: '24px', color: '#627891' }} />
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', backgroundColor: 'red', borderRadius: '50%' }}></span>
        </div>

        {/* User Profile Picture */}
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
          {user?.image ? (
            <img src={user.image} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ fontSize: '16px', color: 'white', lineHeight: '32px', textAlign: 'center', backgroundColor: '#627891', display: 'block' }}>
              {user?.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* User Welcome Message */}
      <div style={{
        marginTop: '20px',
        color: '#434040',
        fontSize: '18px',
        fontWeight: 'bold'
      }}>
        Welcome, {user?.name} 👋
        <p style={{ fontSize: '14px' }}>
          Here’s what is happening in your Spedire account
        </p>
      </div>

      {/* Dashboard and Calendar Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Dashboard</span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#cce7ff',
          padding: '8px',
          borderRadius: '8px'
        }}>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ fontSize: '20px', color: 'gray' }} />
          <span style={{ marginLeft: '8px', color: 'gray', marginRight: '8px' }}>Monthly</span>
          <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '12px', color: 'gray' }} />
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
