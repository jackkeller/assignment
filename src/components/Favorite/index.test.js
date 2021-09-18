import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Favorite from './index';

const setup = (customProps ={}) => {
  const defaultProps = {};
  const props = { ...defaultProps, ...customProps };
  return render(<Favorite {...props} />);
};

const favoriteMock = {
  listingId: '111111'
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Favorite', () => {

  it('should render the Favorite in the document', () => {
    const { getByTitle } = setup({ listingId: favoriteMock.listingId });

    expect(getByTitle(/add to favorites/i)).toBeInTheDocument();
  });

  it('should toggle the Favorite Value on click', async () => {
    const { getByTitle } = setup({ listingId: favoriteMock.listingId });
    const listingFavorite = getByTitle(/add to favorites/i);

    expect(JSON.parse(localStorage.getItem(favoriteMock.listingId))).toBeFalsy();
    fireEvent.click(listingFavorite);
    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem(favoriteMock.listingId))).toBeTruthy();
     })
  });
});
