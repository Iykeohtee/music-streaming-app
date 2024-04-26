"use client"

import React, { useState } from 'react';

const PasswordInput = () => {
  // State to control the visibility of the password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Input field for password */}
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        placeholder="Enter your password"
        style={{ paddingRight: '2rem' }} // Add padding to the right to accommodate the button
      />   

      {/* Button to toggle password visibility */}  
      <button
        onClick={togglePasswordVisibility}
        style={{
          position: 'absolute',
          right: '0.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {/* Change the icon based on visibility state */}
        {isPasswordVisible ? '🙈' : '👀'} {/* Example icons */}  
      </button> 
    </div>
  );
};

export default PasswordInput;
