import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import './Map.css';

const Map = (props) => {

  const [viewport, setViewport] = useState({
    latitude: props.location.lat,
    longitude: props.location.lng,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  return (
    <div className={`map ${props.className}`} style={props.style}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYWRhcnNoc3JpdmFzdGF2YTAxIiwiYSI6ImNrZWR4YmhjcDB3ZWQydW10bWoxZ3N6ODYifQ.N-zZdv7VardT1U4bknwLag"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Marker latitude={props.location.lat} longitude={props.location.lng}>
          <div className="map-marker"></div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;