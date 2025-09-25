import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

function Button({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  style,
  children,
  ...props
}: ButtonProps) {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
    case 'primary':
      return {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none'
      };
    case 'secondary':
      return {
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none'
      };
    case 'danger':
      return {
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none'
      };
    case 'success':
      return {
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none'
      };
    default:
      return {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none'
      };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
    case 'small':
      return {
        padding: '4px 8px',
        fontSize: '14px',
        minHeight: '32px'
      };
    case 'medium':
      return {
        padding: '8px 16px',
        fontSize: '16px',
        minHeight: '40px'
      };
    case 'large':
      return {
        padding: '12px 24px',
        fontSize: '18px',
        minHeight: '48px'
      };
    default:
      return {
        padding: '8px 16px',
        fontSize: '16px',
        minHeight: '40px'
      };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: '4px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    fontWeight: '500',
    transition: 'background-color 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...(fullWidth && { width: '100%' }),
    ...style
  };

  return (
    <button
      style={baseStyles}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
