
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker  } from '@react-google-maps/api';

const containerStyle = {
  width: '90vw',
  height: '50vh'
};

const center = {
  lat: 20.62650,
  lng: -103.41786
};

function MapsSm() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCcpsNNVC15mJL8nnr5QbH4JD6bWYsDRK4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
      <Marker position={{lat: 20.62624,lng: -103.41789 }}/>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapsSm)