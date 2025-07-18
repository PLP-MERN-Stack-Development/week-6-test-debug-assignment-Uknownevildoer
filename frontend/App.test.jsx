
import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders Hello from Frontend', () => {
    render(<App />);
    expect(screen.getByText('Hello from Frontend')).toBeInTheDocument();
  });
});
