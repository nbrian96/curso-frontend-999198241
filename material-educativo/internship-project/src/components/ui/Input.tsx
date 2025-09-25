import React from 'react';
import './ui-components.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

function Input({ label, error, className = '', style, type, ...props }: InputProps) {
  const baseStyles: React.CSSProperties = {
    padding: '8px 12px',
    border: error ? '1px solid #dc3545' : '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    height: '40px',
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: '#ffffff',
    color: '#000000',
    ...style
  };

  // Estilos específicos para inputs de tipo date
  const dateStyles: React.CSSProperties = type === 'date' ? {
    cursor: 'pointer'
  } : {};

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
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          style={{ ...baseStyles, ...dateStyles }}
          className={className}
          type={type}
          {...props}
        />
      </div>
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

export default Input;
