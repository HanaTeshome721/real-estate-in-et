import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MathComponent, { add, multiply } from '../src/app/mathFunctions';

describe('Math', () => {
  test('add function works', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(-1, 1)).toBe(2);
  });

  test('multiply function works', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 4)).toBe(-4);
  });

  test('renders component correctly', () => {
    render(<MathComponent />);
    expect(screen.getByText(/Add: 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Multiply: 6/i)).toBeInTheDocument();
  });
});
