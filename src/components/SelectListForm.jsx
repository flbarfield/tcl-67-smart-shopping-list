import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import './SelectListForm.css';

export default function SelectListForm({
	data,
	areListsLoading,
	setListPath,
	listName,
}) {
	const initialListState = listName ? listName : 'Select a list';
	const [selectedList, setSelectedList] = useState(initialListState);
	const navigate = useNavigate();
	const handleSelectChange = (e) => {
		const input = e.target.value;
		setListPath(input);
		setSelectedList(input?.split('/')[1]);
	};
	return (
		<div className="sideBySide-section select-section">
			{areListsLoading ? (
				<div>Loading lists...</div>
			) : (
				<div className="blue-background form">
					<form>
						<label htmlFor="listSelector">Select List</label>
						<select
							id="listSelector"
							value={selectedList}
							onChange={handleSelectChange}
						>
							{data.map((data) => {
								return (
									<option key={data.path} value={data.path}>
										{data.name}
									</option>
								);
							})}
						</select>
						<Button
							text="View List"
							fn={() => navigate('/list')}
							color="#DCFF4B"
						/>
					</form>
				</div>
			)}
			<div className="selectList-header">
				<h2>Select a List</h2>
			</div>
		</div>
	);
}
