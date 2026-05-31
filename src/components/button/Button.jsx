import React from 'react';
import './Button.scss'; 


const Button = ({ children, href, type = 'button', className = '', ...props }) => {
  const combinedClasses = `btn ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;