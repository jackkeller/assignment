import React from 'react';
import { render } from '@testing-library/react';
import PropertyList from './index';
import { BrowserRouter } from 'react-router-dom';

const setup = (customProps ={}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...customProps };
  return render(<BrowserRouter><PropertyList {...props} /></BrowserRouter>);
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('PropertyListings', () => {

  it('should render the properties container', () => {
    const { getByTestId } = setup();
    expect(getByTestId('properties')).toBeInTheDocument();
  });

});
