import { EventSearch } from "../components/EventSearch";

export const EventsPage = ({ clickOn }) => {
	return (
		<>
			<h1>Events Page:</h1>

			<EventSearch clickOn={clickOn} />
		</>
	);
};

// Events page

// The page shows a list of all events that are retrieved from the back-end server with the following details: title, description, image, startTime, endTime and categories.

// The user can click on an event that leads them to the ‘Event’ page using React Router.

// There is a button that allows the user to add new events using a form.

// A query to add the event to the server is sent as well.

// You can search through the events based on the name of the event.

// You can filter through the list/search results based on categories.
