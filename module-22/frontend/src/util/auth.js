import { redirect } from 'react-router-dom';
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}
const getAuthToken = () => {
  const token = localStorage.getItem('token');
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }
  return token;
};

export default getAuthToken;

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}
export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/auth');
  }

  return null;
}
