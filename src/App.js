import Auth from "./components/auth";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mapImage from "./images/img10.jpg";
import mapImage1 from "./images/map2.jpg";
import "./App.css";
import Shops from "./components/Shops";
import ShopDetails from "./components/ShopDetails";
import { useState } from "react";
import NewRow from "./components/NewRow";
import MapImg from "./components/MapImg";
import WrppedMap from "./components/MapImg";

function App() {
	const [showMap, setShowMap] = useState(false);

	const toggleShowMap = () => {
		setShowMap(!showMap);
		let shopDetails = document.querySelector(".ShopDetails");
		if (!showMap) {
			shopDetails.style.display = "block";
		} else {
			shopDetails.style.display = "none";
		}
	};

	return (
		<div className='App'>
			<header>
				<h1 className='main-heading'>Shops Managemet</h1>
				<button className='add-store' onClick={() => toggleShowMap()}>
					<FontAwesomeIcon className='add-icon' icon={faPlus} /> Add Shop
				</button>
			</header>
			<img src={mapImage1} alt='' />

			<Shops />
			<ShopDetails showMap={showMap} setShowMap={setShowMap} />

			{/* <WrppedMap /> */}
		</div>
	);
}

export default App;

// For Google Map
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
// import "./App.css";

// const App = () => {
// 	const { isLoaded } = useLoadScript({
// 		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
// 	});
// 	const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

// 	return (
// 		<div className='App'>
// 			{!isLoaded ? (
// 				<h1>Loading...</h1>
// 			) : (
// 				<GoogleMap
// 					mapContainerClassName='map-container'
// 					center={center}
// 					zoom={10}
// 				>
// 					<Marker position={{ lat: 18.52043, lng: 73.856743 }} />
// 				</GoogleMap>
// 			)}
// 		</div>
// 	);
// };

// export default App;
