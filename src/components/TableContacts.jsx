import React from "react";
import PropTypes from "prop-types";

const TableContacts = ({ contacts, dispatch }) => {
	const handleDelete = (id) => {
		const deleteAction = {
			type: "delete",
			payload: id,
		};

		dispatch(deleteAction);
	};

	return (
		<>
			<table className='table table-borderless table-hover'>
				<thead>
					<tr>
						<th scope='col'>#</th>
						<th scope='col'>First name</th>
						<th scope='col'>Last name</th>
						<th scope='col'>Phone number</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map(({ id, firtName, lastName, phoneNumber }) => {
						return (
							<tr key={id}>
								<th scope='row'>{id.split("-")[0]}</th>
								<td>{firtName}</td>
								<td>{lastName}</td>
								<td>{phoneNumber}</td>
								<td>
									<button
										type='button'
										className='btn btn-danger'
										onClick={() => handleDelete(id)}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

TableContacts.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			phoneNumber: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default TableContacts;
