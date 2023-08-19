// www.domain.com/news
import Link from 'next/link';
const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href='/news/111'>111</Link>
        </li>
        <li>
          <Link href='/news/222'>222</Link>
        </li>
        <li>Nothing to see here</li>
      </ul>
    </>
  );
};

export default NewsPage;
