import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch the data" }),
    //   { status: 500 }
    // );
    return json({ message: "Could not fetch the data" }, { status: 500 });
  } else {
    return response;
  }
}

// import {Link} from 'react-router-dom'

// const DUMMY_EVENTS = [
//     {id:'e1',title:'SomeEvent1'},
//     {id:'e2',title:'SomeEvent2'},
//     {id:'e3',title:'SomeEvent3'},
//     {id:'e4',title:'SomeEvent4'},
//     {id:'e5',title:'SomeEvent5'}
// ]

// function EventsPage() {
//     return (
//     <>
//         <h1>Events Page</h1>
//     {DUMMY_EVENTS.map((event) => (
//         <li key={event.id}><Link to={event.id}>{event.title}</Link></li>
//     ))}
//     </>
//     )
// }

// export default EventsPage;
