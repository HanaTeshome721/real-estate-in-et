import React from 'react';

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

const MathComponent: React.FC = () => (
  <div>
    <div>Add:{add(2, 3)}</div>
    <div>Multiply: {multiply(2, 3)}</div>
  </div>
);

export default MathComponent;