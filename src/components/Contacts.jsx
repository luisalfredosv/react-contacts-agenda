import React, { useReducer, useEffect, useState } from "react";
import TableContacts from "./TableContacts";
import FormContact from "./FormContact";
import { ContactsReducer } from "../reducers/ContactsReducer";

const init = () => {
	const contacts = localStorage.getItem("contacts");
	return contacts ? JSON.parse(contacts) : [];
};

const Contacts = () => {
	const [state, dispatch] = useReducer(ContactsReducer, [], init);

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(state));
	}, [state]);

	const [formView, setFormView] = useState(false);

	return (
		<>
			<div className='container mt-3'>
				<button
					className={
						!formView
							? "btn btn-sm btn-success"
							: "btn btn-sm btn-secondary"
					}
					onClick={() => setFormView(!formView)}
				>
					{!formView ? "Add Contact" : "Close form"}
				</button>
				{formView && (
					<div>
						<FormContact dispatch={dispatch} />
					</div>
				)}

				<TableContacts contacts={state} dispatch={dispatch} />
			</div>
		</>
	);
};

export default Contacts;
