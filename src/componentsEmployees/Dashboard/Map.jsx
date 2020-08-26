
import * as React from 'react';
import { Component } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

export default class Mapbox extends Component {
  state = {
    viewport: { longitude: -99.12766, latitude: 19.42847, zoom: 14 }
  };

  render() {
    const { viewport } = this.state;
    const MAPBOX_TOKEN = 'pk.eyJ1IjoidmFueWF4ZWwiLCJhIjoiY2tlYTRoc2p1MDN4NDJybXl2OWl2YTB4ZCJ9.NI_za5LjY4UB1F51CzHC_w';

    return (
      <ReactMapGL {...viewport}
        width="100vw"
        height="60vh"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}>
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}

        />
        <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
      </ReactMapGL >
    );
  }
}