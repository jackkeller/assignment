import React, { FC, useState, useEffect } from 'react';
import { Properties } from 'interfaces';
import './index.scss';

const PropertyList: FC<unknown> = () => {
  const cachedPropertiesData: any = localStorage.getItem('properties');
  const [propertiesData, setPropertiesData] = useState<Properties[]>();

  // setPropertiesData(JSON.parse(cachedPropertiesData));

  useEffect(() => {
    cachedPropertiesData ? setPropertiesData(JSON.parse(cachedPropertiesData)) : getListings();

    async function getListings() {

      const h = new Headers();
      h.append('Authorization', 'Basic ' + window.btoa('simplyrets:simplyrets'));

      const response = await fetch('https://api.simplyrets.com/properties', { method: 'GET', headers: h, mode: 'cors' });
      const data = await response.json();

      console.log('API Response:', response.status);

      localStorage.setItem('properties', JSON.stringify(data));
      setPropertiesData(data);
    }
  }, [cachedPropertiesData]);

  return (
    <div className='properties' data-testid="properties">
      {propertiesData?.map(p => (
        <div key={p.mlsId} className="property">
          {p.mlsId}
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
