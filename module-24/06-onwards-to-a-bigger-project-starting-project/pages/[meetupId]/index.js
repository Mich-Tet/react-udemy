import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';
const DetailsPage = () => {
  const router = useRouter();

  return (
    <MeetupDetail
      image={
        'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg'
      }
      title={'A first meetup'}
      address={'Some adress 5, 12345 Some City'}
      description={'This is a first meetup!'}
    ></MeetupDetail>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://www.meetup.com/blog/wp-content/uploads/2020/08/holding-hands.jpg',
        title: 'A first meetup',
        address: 'Some adress 5, 12345 Some City',
        description: 'This is a first meetup!',
      },
    },
  };
}

export default DetailsPage;
