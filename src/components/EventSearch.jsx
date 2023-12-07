import { useState } from "react";
import { data } from "../backend/events";
import { EventList } from "./EventList";
import { TextInput } from "./TextInput";

export const EventSearch = ({ clickOn }) => {
	const [searchField, setSearchField] = useState("");
	const events = data.events;
	return (
		<>
			<h3>EventSearch:</h3>
			<p>
				<TextInput />
			</p>
			<EventList clickOn={clickOn} events={events} />
		</>
	);
};
