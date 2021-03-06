import React, { FC, useState, useEffect } from 'react';
import { Properties } from 'interfaces';
import {
  bathMath,
  formatNums,
  formatListingPrice,
  formatDate
} from 'utilities';
import Favorite from 'components/Favorite';
import './index.scss';

const PropertyList: FC<unknown> = () => {
  const cachedPropertiesData: any = localStorage.getItem('properties');
  const [propertiesData, setPropertiesData] = useState<Properties[]>();

  useEffect(() => {
    document.title = 'Property Listings - Fictitious Agency';
    cachedPropertiesData
      ? setPropertiesData(JSON.parse(cachedPropertiesData))
      : getListings();

    async function getListings() {
      // Messy way to handle auth, probably should use ENVS
      const h = new Headers();
      h.append(
        'Authorization',
        'Basic ' + window.btoa('simplyrets:simplyrets')
      );

      const response = await fetch('https://api.simplyrets.com/properties', {
        method: 'GET',
        headers: h,
        mode: 'cors'
      });
      const data = await response.json();

      // Would remove before production, this is to ensure the call is not made after data cached
      console.log('API Response:', response.status);

      localStorage.setItem('properties', JSON.stringify(data));
      setPropertiesData(data);
    }
  }, [cachedPropertiesData]);

  return (
    <div className="properties" data-testid="properties">
      {propertiesData?.map((p) => (
        <div key={p.mlsId} className="property">
          <div
            className="property-photo"
            style={{ backgroundImage: `url(${p.photos[0]})` }}
          >
            <Favorite listingId={p.listingId} />
          </div>
          <div className="property-info">
            <div className="property-info-details">
              {p.property.bedrooms ? (
                <span>{p.property.bedrooms} BR | </span>
              ) : null}
              {p.property.bathsFull ? (
                <span>
                  {bathMath(p.property.bathsFull, p.property.bathsHalf)} Bath |{' '}
                </span>
              ) : null}
              {p.property.area ? (
                <span>{formatNums(p.property.area)} Sq Ft</span>
              ) : null}
            </div>
            <div className="property-info-price">
              {formatListingPrice(p.listPrice)}
            </div>
            <div className="property-info-address">
              {p.address.streetNumber} {p.address.streetName.toLowerCase()},{' '}
              {p.address.state === 'Texas' ? 'TX' : p.address.state}
            </div>
            <div className="property-info-listed">
              Listed: {formatDate(new Date(p.listDate))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
