// import React from 'react'
// import {
// 	GoogleMap,
// 	withScriptjs,
// 	withGoogleMap,
// 	Marker,
// } from "@react-google-maps/api";
// function MapImg() {
// 	return (
// 		<GoogleMap
// 			defaultZoom={this.props.defaultZoom}
// 			defaultCenter={this.props.defaultCenter}
// 		/>
// 	);
// }
// const WrppedMap = withScriptjs(withGoogleMap(MapImg));

// export default WrppedMap;
//  <WrppedMap googleMapURL/>

// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const Map = () => {
// 	const containerStyle = {
// 		width: "400px",
// 		height: "400px",
// 	};

// 	const center = {
// 		lat: -34.397,
// 		lng: 150.644,
// 	};

// 	return (
// 		<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
// 			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
// 				<Marker position={center} />
// 			</GoogleMap>
// 		</LoadScript>
// 	);
// };

// export default Map;

// import {
// 	withScriptjs,
// 	withGoogleMap,
// 	GoogleMap,
// 	Marker,
// } from "react-google-maps/api";

// const MapWithAMarker = withScriptjs(
// 	withGoogleMap((props) => (
// 		<GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
// 			<Marker position={{ lat: -34.397, lng: 150.644 }} />
// 		</GoogleMap>
// 	))
// );

// <MapWithAMarker
// 	googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places'
// 	loadingElement={<div style={{ height: `100%` }} />}
// 	containerElement={<div style={{ height: `400px` }} />}
// 	mapElement={<div style={{ height: `100%` }} />}
// />;

// export default MapWithAMarker;
