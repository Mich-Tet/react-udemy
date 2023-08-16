import React from 'react';
import { defer, json, redirect, useRouteLoaderData } from 'react-router-dom';
import { Await } from 'react-router-dom';
import { Suspense } from 'react';
// import { useParams } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
const EventDetailPage = () => {
  // const params = useParams();
  // const data = useLoaderData();
  // const data = useRouteLoaderData('event-detail');
  const { event, events } = useRouteLoaderData('event-detail');
  return (
    // <div>
    //   <EventItem event={data.event}></EventItem>
    //   <EventsList event={} />
    // </div>
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};
async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event' },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
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
export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    { method: request.method }
  );
  if (!response.ok) {
    throw json({ message: 'Could not delete selected event' }, { status: 500 });
  }
  return redirect('/events');
}
