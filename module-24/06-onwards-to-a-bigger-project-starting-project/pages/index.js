import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image:
      'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg',
    address: 'Some adress 5, 12345 Some City',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image:
      'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg',
    address: 'Some adress 1, 12345 Some City',
    description: 'This is a second meetup!',
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  // always return object in getStaticProps
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
