import React, { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;

  /**
   * Simple click handler
   */
  onClick?: () => void;
};

/**
 * The world's most _basic_ button
 */
const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  // TODO: Light / dark theme should come from a context
  <button style={{ background: '#eee' }} onClick={onClick} type="button">
    {children}
  </button>
);

export default Button;
