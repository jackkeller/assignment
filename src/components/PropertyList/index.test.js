import React from 'react';
import { render } from '@testing-library/react';
import PropertyList from './index';

const setup = (customProps ={}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...customProps };
  return render(<PropertyList {...props} />);
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('PropertyListings', () => {

  it('should render the text PropertyListings in the document', () => {
    const { getByText } = setup({ text: 'PropertyListings' });
    expect(getByText('PropertyListings')).toBeInTheDocument();
  });

});
