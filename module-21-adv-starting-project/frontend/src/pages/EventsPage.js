import { defer, json, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();
  // const data = useLoaderData();
  // const events = data.events;
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  return (
    // <>
    //   <EventsList events={events} />
    // </>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Error();
    // throw { message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    // return response;
    const resData = await response.json();
    return resData.events;
    // const res = new Response('any data', { status: 201 });
    // return res;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
