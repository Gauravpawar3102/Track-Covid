import React from 'react';
import locationIcon from '@iconify/icons-mdi/virus-outline';
import { Icon } from '@iconify/react';
const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
