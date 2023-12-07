/* eslint-disable react/prop-types */
import { EventItem } from "./EventItem";

export const EventList = ({ events, clickOn }) => {
	return (
		<>
			<h4>EventList</h4>
			{events.map((event) => (
				<EventItem key={events.id} event={event} clickOn={clickOn} />
			))}
		</>
	);
};
