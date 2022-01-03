import GoogleMapReact from 'google-map-react';
import '../index.css';
import LocationMarker from './LocationMarker';
const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDHwVtozDN30ZUfozdLxpGbNvZY9qSxhoI ' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};
Map.defaultProps = {
  center: {
    lat: 17.385,
    lng: 78.4867,
  },
  zoom: 5,
};
export default Map;
