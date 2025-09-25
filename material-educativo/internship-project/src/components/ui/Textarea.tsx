import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  size?: 'small' | 'medium' | 'large'
}

function Textarea({
  label,
  error,
  size = 'medium',
  className = '',
  style,
  ...props
}: TextareaProps) {
  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
    case 'small':
      return {
        padding: '8px 10px',
        fontSize: '14px',
        minHeight: '80px'
      };
    case 'medium':
      return {
        padding: '12px',
        fontSize: '16px',
        minHeight: '120px'
      };
    case 'large':
      return {
        padding: '16px',
        fontSize: '18px',
        minHeight: '160px'
      };
    default:
      return {
        padding: '12px',
        fontSize: '16px',
        minHeight: '120px'
      };
    }
  };

  const baseStyles: React.CSSProperties = {
    border: error ? '1px solid #dc3545' : '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontFamily: 'inherit',
    resize: 'vertical',
    boxSizing: 'border-box',
    ...getSizeStyles(),
    ...style
  };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label style={{
          display: 'block',
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          {label}
        </label>
      )}
      <textarea
        style={baseStyles}
        className={className}
        {...props}
      />
      {error && (
        <span style={{
          color: '#dc3545',
          fontSize: '12px',
          marginTop: '4px',
          display: 'block'
        }}>
          {error}
        </span>
      )}
    </div>
  );
}

export default Textarea;
