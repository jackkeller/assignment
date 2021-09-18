import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';
import { BrowserRouter } from 'react-router-dom';

const setup = (customProps ={}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...customProps };
  return render(<BrowserRouter><Home {...props} /></BrowserRouter>);
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Home', () => {
  it('should render a link in the document', () => {
    const { getByText } = setup({ linkText: 'Home', linkPath: 'some_page' });
    const link = getByText('Home');

    expect(link).toBeInTheDocument();
    expect(link.href).toMatch('some_page');
    expect(link).not.toBe('a sausage');
  });
});
