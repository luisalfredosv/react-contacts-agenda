import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const FormContact = ({ dispatch }) => {
	const [data, setData] = useState({
		firtName: "",
		lastName: "",
		phoneNumber: "",
	});

	const { firtName, lastName, phoneNumber } = data;

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const actionAdd = {
		type: "add",
		payload: {
			id: uuid(),
			firtName,
			lastName,
			phoneNumber,
		},
	};
	const handleAdd = () => {
		dispatch(actionAdd);
	};

	return (
		<>
			<div>
				<div className='mb-1'>
					<label htmlFor='firtName' className='form-label'>
						First Name
					</label>
					<input
						type='text'
						className='form-control'
						id='firtName'
						value={firtName}
						name='firtName'
						placeholder='Jhon'
						onChange={handleChange}
					/>
				</div>
				<div className='mb-1'>
					<label htmlFor='lastName' className='form-label'>
						Last Name
					</label>
					<input
						type='text'
						className='form-control'
						id='lastName'
						value={lastName}
						name='lastName'
						placeholder='Doe'
						onChange={handleChange}
					/>
				</div>
				<div className='mb-1'>
					<label htmlFor='phoneNumber' className='form-label'>
						Phone number
					</label>
					<input
						type='text'
						className='form-control'
						id='phoneNumber'
						value={phoneNumber}
						name='phoneNumber'
						placeholder='889844646'
						onChange={handleChange}
					/>
				</div>
				<div className='d-grid mt-3'>
					<button className='btn btn-success' onClick={handleAdd}>
						Add contact
					</button>
				</div>
			</div>
		</>
	);
};

export default FormContact;
