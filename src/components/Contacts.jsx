import React from "react";
import TableContacts from "./TableContacts";

const Contacts = () => {
	const contacts = () => [
		{
			id: "raondoand",
			name: "Jhon",
			lastName: "Doe",
			phoneNumber: "65661646",
		},
		{
			id: "raondoand",
			name: "Jhon",
			lastName: "Doe",
			phoneNumber: "65661646",
		},
	];

	return (
		<div className='container mt-3'>
			<TableContacts contacts={contacts} />
		</div>
	);
};

export default Contacts;
