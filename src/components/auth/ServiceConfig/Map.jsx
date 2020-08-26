import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "45vh",
      latitude: 19.42847,
      longitude: -99.12766,
      zoom: 16
    }
  };
  render(){
    return (
    <div>
      <ReactMapGL
      {...this.state.viewport} 
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={(viewport => this.setState(viewport))} 
      mapboxApiAccessToken='pk.eyJ1IjoibWFyYW11bGF0byIsImEiOiJja2VhOGNtcXoyZHhkMnNwOG0xMTNjNmd5In0.ORehNnJ51xmK1KgnV-bdlA'>
      </ReactMapGL>
    </div>
  )
}
}

export default Map;
