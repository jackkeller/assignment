import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders application header', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const heading = screen.getByRole(
      'heading',
      /property listings/i,
    );
    expect(heading).toBeInTheDocument();
  });
});
