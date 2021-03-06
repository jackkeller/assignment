import React, { FC, useState, useEffect } from 'react';
import './index.scss';

interface FavoriteProps {
  listingId: string;
}

const Favorite: FC<FavoriteProps> = ({ listingId }) => {
  const fill = {
    color: '#f42828',
    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
  };
  const stroke = {
    color: '#fff',
    path: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
  };

  const localStoreFav = localStorage.getItem(listingId);
  const [favorite, setFavorite] = useState<any>();

  useEffect(() => {
    localStoreFav
      ? setFavorite(JSON.parse(localStoreFav))
      : localStorage.setItem(listingId, 'false');
  }, [listingId, localStoreFav]);

  const toggleFav = () => {
    setFavorite(!favorite);
    localStorage.setItem(listingId, JSON.stringify(!favorite));
  };

  return (
    <div
      className="favorite"
      onClick={toggleFav}
      title={favorite ? 'Remove from Favorites' : 'Add to Favorites'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />

        {favorite ? (
          <path fill={fill.color} d={fill.path} />
        ) : (
          <path fill={stroke.color} d={stroke.path} />
        )}
      </svg>
    </div>
  );
};

export default Favorite;
