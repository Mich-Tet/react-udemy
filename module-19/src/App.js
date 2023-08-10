import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux/es/hooks/useSelector';
function App() {
  const toggle = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <>
      <Header />
      {!toggle && <Auth />}
      {toggle && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
