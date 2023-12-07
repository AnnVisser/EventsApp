/* eslint-disable react/prop-types */
export const DateTime = ({ dateString }) => {
	const dateObject = new Date(dateString);
	const formattedDate = dateObject.toLocaleDateString();
	const formattedTime = dateObject.toLocaleTimeString();
	return (
		<>
			<p>Date: {formattedDate}</p>
			<p>Time: {formattedTime}</p>
		</>
	);
};
