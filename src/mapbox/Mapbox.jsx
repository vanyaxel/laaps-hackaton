
import * as React from 'react';
import { Component } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

export default class Mapbox extends Component {
    state = {
        viewport: { longitude: -122.45, latitude: 37.78, zoom: 14 }
    };

    render() {
        const { viewport } = this.state;
        const MAPBOX_TOKEN = 'pk.eyJ1IjoidmFueWF4ZWwiLCJhIjoiY2tlYTRoc2p1MDN4NDJybXl2OWl2YTB4ZCJ9.NI_za5LjY4UB1F51CzHC_w';

        return (
            <ReactMapGL {...viewport}
                width="100vw"
                height="100vh"
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

/* import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

export default function Mapbox() {

    mapboxgl.accessToken = 'pk.eyJ1IjoidmFueWF4ZWwiLCJhIjoiY2tlYTRoc2p1MDN4NDJybXl2OWl2YTB4ZCJ9.NI_za5LjY4UB1F51CzHC_w';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [-122.662323, 45.523751], // starting position
        zoom: 12
    });

    const [maps, setMap] = useState(map);

    const MAPBOX_TOKEN = 'pk.eyJ1IjoidmFueWF4ZWwiLCJhIjoiY2tlYTRoc2p1MDN4NDJybXl2OWl2YTB4ZCJ9.NI_za5LjY4UB1F51CzHC_w';


    var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
    map.setMaxBounds(bounds);

    // initialize the map canvas to interact with later
    var canvas = map.getCanvasContainer();

    // an arbitrary start will always be the same
    // only the end or destination will change
    var start = [-122.662323, 45.523751];


    // create a function to make a directions request
    function getRoute(end) {
        // make a directions request using cycling profile
        // an arbitrary start will always be the same
        // only the end or destination will change
        var start = [-122.662323, 45.523751];
        var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + mapboxgl.accessToken;

        // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
        var req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onload = function () {
            var json = JSON.parse(req.response);
            var data = json.routes[0];
            var route = data.geometry.coordinates;
            var geojson = {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: route
                }
            };
            // if the route already exists on the map, reset it using setData
            if (map.getSource('route')) {
                map.getSource('route').setData(geojson);
            } else { // otherwise, make a new request
                map.addLayer({
                    id: 'route',
                    type: 'line',
                    source: {
                        type: 'geojson',
                        data: {
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: geojson
                            }
                        }
                    },
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#3887be',
                        'line-width': 5,
                        'line-opacity': 0.75
                    }
                });
            }
            // add turn instructions here at the end
        };
        req.send();
    }

    map.on('load', function () {
        // make an initial directions request that
        // starts and ends at the same location
        getRoute(start);

        // Add starting point to the map
        map.addLayer({
            id: 'point',
            type: 'circle',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: start
                        }
                    }
                    ]
                }
            },
            paint: {
                'circle-radius': 10,
                'circle-color': '#3887be'
            }
        });
        // this is where the code from the next step will go
    });

    return (
        <ReactMapGL
            {...map}
            onViewportChange={nextViewport => setMap(nextViewport)}
            mapboxApiAccessToken={mapboxgl.accessToken}
        />
    );
} */