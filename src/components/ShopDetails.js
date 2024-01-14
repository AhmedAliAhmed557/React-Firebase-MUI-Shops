import React, { useRef, useState } from "react";
import mapImage from "../images/img10.jpg";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../config/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function ShopDetails(props) {
	const [shopName, setShopName] = useState("");
	const [shopCode, setShopCode] = useState();
	const [shopLocation, setShopLocation] = useState("");
	const [shopNumber, setShopNumber] = useState("");

	const shopsCollectionRef = collection(db, "shops");

	const [show, setShow] = useState(false);

	const handleCancel = (e) => {
		e.preventDefault();
		let shopDetails = document.querySelector(".ShopDetails");
		shopDetails.style.display = "none";
		props.setShowMap(!props.showMap);
	};

	const handleContinue = async (e) => {
		e.preventDefault();
		let shopDetails = document.querySelector(".ShopDetails");
		shopDetails.style.display = "none";
		props.setShowMap(!props.showMap);

		shopDetails.style.display = "none";
		try {
			await addDoc(shopsCollectionRef, {
				shopName: shopName,
				shopCode: shopCode,
				shopNumber: shopNumber,
				shopLocation: shopLocation,
			});
		} catch (err) {
			console.error(err);
		}
		setShopName("");
		setShopLocation("");
		setShopNumber("");
		setShopCode("");
		window.location.reload();
	};

	return (
		<div className='ShopDetails'>
			<form>
				<h2>Shop Location</h2>
				<div
					className='location'
					onChange={(e) => setShopLocation(e.target.value)}
				>
					<input type='text' placeholder='Search for your location' />
					<img src={mapImage} alt='' />
				</div>
				<div className='info'>
					<input
						type='text'
						placeholder='Shop Name'
						onChange={(e) => setShopName(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Shop Number'
						onChange={(e) => setShopNumber(e.target.value)}
					/>
					<input
						type='number'
						placeholder='Shop Code'
						onChange={(e) => setShopCode(Number(e.target.value))}
						min={3}
						max={6}
					/>
				</div>
				<div className='submit'>
					<button className='cancel' onClick={handleCancel}>
						Cancel
					</button>
					<button className='continue' onClick={handleContinue}>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
}

export default ShopDetails;
