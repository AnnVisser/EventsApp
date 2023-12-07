/* eslint-disable react/prop-types */
import { DateTime } from "./DateTime";

export const EventItem = ({ event, clickOn }) => {
	return (
		<>
			<p>{event.title}</p>
			<img height='300px' src={event.image} />
			<p>{event.description}</p>
			<p>
				When: <DateTime dateString={event.startTime} />
			</p>
			<p>
				Until: <DateTime dateString={event.endTime} />
			</p>
		</>
	);
};
