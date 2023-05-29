// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker  } from '@react-google-maps/api';

// const containerStyle = {
//   width: '40vw',
//   height: '50vh'
// };

// const center = {
//     lat: 20.62624,lng: -103.41789
// };

// function MapsLg() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCcpsNNVC15mJL8nnr5QbH4JD6bWYsDRK4"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={16}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >

//       <Marker position={{lat: 20.62624,lng: -103.41789 }}/>
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MapsLg)

import React from "react";

const MapsLg = () => {
  return (
    <div>
      <iframe
        class="iframe"
        src="https://maps.google.com/?ll=20.62624,-103.41789&z=14&t=m&output=embed"
        height="300"
        width="600"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MapsLg;
