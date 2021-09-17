import React, { FC } from 'react';
import './index.scss';

interface PropertyListProps {
  text: string;
}

const PropertyList: FC<PropertyListProps> = ({ text }) => {
  return (
    <div className='propertylist'>
      {text}
    </div>
  );
};

export default PropertyList;
