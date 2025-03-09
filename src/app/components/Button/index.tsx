'use client';

import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outlined';
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant,
  onClick,
  className,
}: ButtonProps) {
  return (
    <StyledButton variant={variant} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
}
