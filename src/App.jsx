import "./App.css";
import { useState } from "react";
import { EventsPage } from "./pages/EventsPage";
import { EventPage } from "./pages/EventPage";

function App() {
	const [userEvent, setUserEvent] = useState();

	return (
		<>
			<h1> App page:</h1>
			<EventsPage />
		</>
	);
}

export default App;
