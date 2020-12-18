import { useForm } from 'react-hook-form';
import { useAuth } from '../firebase/useAuth';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Link from 'next/link';

import Button from './Button';

const LoginForm = () => {
  const auth = useAuth();
  const router = useRouter();
  const { register, errors, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (data) => {
    setIsLoading(true);
    setError(null);
    return auth.signIn(data).then((response) => {
      setIsLoading(false);
      response.error ? setError(response.error) : router.push('/');
    });
  };

  const handleLoginWithGoogle = async () => {
    const user = await auth.signInWithGoogle().then(router.push('/'));
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs-container">
        <div>
          {' '}
          <label htmlFor="email">Email address</label>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              ref={register({
                required: 'Please enter an email',
                pattern: {
                  // value: /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,
                  message: 'Not a valid email',
                },
              })}
            />
            {errors.email && (
              <div className="errors">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              ref={register({
                required: 'Please enter a password',
                minLength: {
                  value: 6,
                  message: 'Should have at least 6 characters',
                },
              })}
            />
            {errors.password && (
              <div className="errors">{errors.password.message}</div>
            )}
          </div>
        </div>
        <div className="forgot-password">
          <Link href="/reset-password">
            <a href="#">Forgot your password?</a>
          </Link>
        </div>
      </div>

      <div className="hold-inline">
        <div className="button-container inline-block">
          <span>
            <button type="submit" className="auth-button">
              Log in
            </button>
            {/* <Button title="Login" type="submit" isLoading={isLoading} /> */}
          </span>
        </div>
        <div
          className="google-btn inline-block"
          onClick={handleLoginWithGoogle}
        >
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>

      {error?.message && <div className="errors">{error.message}</div>}
    </form>
  );
};

export default LoginForm;
