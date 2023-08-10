import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };
  const toggle = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <div>
      {!toggle && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={loginHandler}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                />
              </div>

              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                />
              </div>

              <button>Login</button>
            </form>
          </section>
        </main>
      )}
    </div>
  );
};

export default Auth;
