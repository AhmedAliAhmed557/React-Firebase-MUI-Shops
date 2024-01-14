import React from "react";
import NewRow from "./NewRow";

function Shops() {
	return (
		<div className='mytable'>
			<table>
				<thead>
					<tr>
						<th className='table-heading'>Shop Name</th>
						<th className='table-heading'>Shop Code</th>
						<th className='table-heading'>Location</th>
						<th className='table-heading'>Phone Number</th>
						<th></th>
					</tr>
				</thead>

				<NewRow />
			</table>
		</div>
	);
}

export default Shops;
