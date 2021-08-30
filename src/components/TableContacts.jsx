import React from "react";
import PropTypes from "prop-types";

const TableContacts = ({ contacts }) => {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th scope='col'>#</th>
					<th scope='col'>First</th>
					<th scope='col'>Last</th>
					<th scope='col'>Contact Number</th>
					<th scope='col'>Actions</th>
				</tr>
			</thead>
			<tbody>
				{contacts.map(({ id, name, lastName, phoneNumber }) => {
					return (
						<tr>
							<th scope='row' key={id}>
								{id}
							</th>
							<td>{name}</td>
							<td>{lastName}</td>
							<td>{phoneNumber}</td>
							<td>
								<button className='btn btn-danger'>
									Delete
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

TableContacts.propTypes = {
	contacts: PropTypes.array,
};

export default TableContacts;
