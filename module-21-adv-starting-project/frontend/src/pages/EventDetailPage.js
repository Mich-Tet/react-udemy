import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const EventDetailPage = () => {
  const params = useParams();
  return (
    <div>
      EventDetailPage for {params.eventId}
      <p>
        <Link
          to={'..'}
          relative='path'
        >
          Back{' '}
        </Link>
      </p>
    </div>
  );
};

export default EventDetailPage;
