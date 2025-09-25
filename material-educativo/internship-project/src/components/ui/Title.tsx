import React from 'react';

function Title({
  style,
  className,
  children,
  ...props
}: {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  [key: string]: unknown;
}) {

  return (
    <h1
      style={style}
      className={className}
      {...props}
    >
      {children}
    </h1>
  );
}

export default Title;
