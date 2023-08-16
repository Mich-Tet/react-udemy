import React from 'react';
import PageContent from './PageContent';
import NewsletterSignup from '../components/NewsletterSignup';
const NewsletterPage = () => {
  return (
    <PageContent title='Join our awesome newsletter!'>
      <NewsletterSignup />
    </PageContent>
  );
};

export default NewsletterPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}
