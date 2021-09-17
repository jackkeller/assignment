import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {
  linkText: string;
  linkPath: string;
}

const Home: FC<HomeProps> = ({ linkText, linkPath, children }) => {
  return (
    <div className='home container'>
      <p>{children}</p>
      <Link to={`/${linkPath}`}>{linkText}</Link>
    </div>
  );
};

export default Home;
