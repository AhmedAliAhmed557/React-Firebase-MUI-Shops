import React from "react";
import { useEffect, useState } from "react";
import {
	faEdit,
	faTrash,
	faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../config/firebase";
import {
	getDocs,
	collection,
	deleteDoc,
	updateDoc,
	doc,
} from "firebase/firestore";

function NewRow() {
	const [shops, setShops] = useState([]);
	const [show, setShow] = useState(false);

	const shopsCollectionRef = collection(db, "shops");

	useEffect(() => {
		const getShopsList = async () => {
			try {
				const data = await getDocs(shopsCollectionRef);
				const filteredData = data.docs.map((shop) => ({
					...shop.data(),
					id: shop.id,
				}));
				setShops(filteredData);
				console.log("filteredData", filteredData);
			} catch (err) {
				console.error(err);
			}
		};
		getShopsList();
		// setCounter((counter += 1));
	}, []);

	const handleDelete = async (id) => {
		const shopDoc = doc(db, "shops", id);
		await deleteDoc(shopDoc);
		window.location.reload();
	};

	const updataShopInfo = async (id) => {
		let shopDetails = document.querySelector(".ShopDetails");
		shopDetails.style.display = "block";

		try {
			const shopDoc = doc(db, "shops", id);
			await deleteDoc(shopDoc);
			const updatedShops = shops.filter((shop) => shop.id === id);
			await updateDoc(shopDoc, { updatedShops });
			console.log("updatedShops", shops);
		} catch (err) {
			console.error(err);
		}

		// const shopDoc = doc(db, "shops", id);
		// console.log(id);
		// await updateDoc(shopDoc, {});
	};

	return (
		<tbody>
			{shops.map((shop) => {
				return (
					<tr key={shop.id}>
						<td>{shop.shopName}</td>
						<td>{shop.shopCode}</td>
						<td>{shop.shopLocation}</td>
						<td>{shop.shopNumber}</td>
						<td className='icon-btn'>
							<FontAwesomeIcon
								onClick={() => handleDelete(shop.id)}
								className='option-icon delete'
								icon={faTrash}
								color='#8c8c8c'
							/>{" "}
							<FontAwesomeIcon
								onClick={() => updataShopInfo(shop.id)}
								className='option-icon edit'
								icon={faEdit}
								color='#8c8c8c'
							/>
						</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default NewRow;

// const showOptions = () => {
// 	let optionBox = document.querySelector(".options .option-box");
// 	setShow(!show);
// 	if (show === false) {
// 		optionBox.style.display = "flex";
// 	} else {
// 		optionBox.style.display = "none";
// 	}
// };

// const tdElement = (id) => {
// 		return (
// 			<td className='options' onClick={() => showOptions()}>
// 				<div className='option-box'>
// 					<button>
// 						<FontAwesomeIcon
// 							className='option-icon edit'
// 							icon={faEdit}
// 							color='#8c8c8c'
// 						/>{" "}
// 						Edit
// 					</button>
// 					<button onClick={() => handleDelete(id)}>
// 						<FontAwesomeIcon
// 							className='option-icon delete'
// 							icon={faTrash}
// 							color='#8c8c8c'
// 						/>{" "}
// 						Delete
// 					</button>
// 				</div>
// 				<FontAwesomeIcon className='option-icon ellipsis' icon={faEllipsisV} />
// 			</td>
// 		);
// 	};
