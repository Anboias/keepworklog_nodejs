import { useForm } from 'react-hook-form';
import { useAuth } from '../firebase/useAuth';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Link from 'next/link';

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

  const handleChange = (event) => {
    if (event) {
      event.target.value
        ? event.target.classList.add('withValue')
        : event.target.classList.remove('withValue');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <div className="input-form">
          <input
            id="email"
            type="email"
            name="email"
            className="input-text"
            onChange={handleChange}
            ref={register({
              required: 'Please enter an email',
              pattern: {
                // value: /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,
                message: 'Not a valid email',
              },
            })}
          />
          <span className="floating-label">Email address</span>
          {errors.email && <div className="errors">{errors.email.message}</div>}
        </div>
        <div className="input-form">
          <input
            id="password"
            type="password"
            name="password"
            className="input-text"
            onChange={handleChange}
            ref={register({
              required: 'Please enter a password',
              minLength: {
                value: 6,
                message: 'Should have at least 6 characters',
              },
            })}
          />
          <span className="floating-label">Password</span>

          {errors.password && (
            <div className="errors">{errors.password.message}</div>
          )}
        </div>
        <div className="forgot-password">
          <Link href="/reset-password">
            <a href="#" className="orange">
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>

      <div className="buttons">
        <div className="button" type="submit">
          <span>
            Login
            {/* <button type="submit" className="auth-button"> */}
            {/* Log in */}
            {/* </button> */}
            {/* <Button title="Login" type="submit" isLoading={isLoading} /> */}
          </span>
        </div>
        <div className="button">
          <div onClick={handleLoginWithGoogle}>
            <img
              className="google-icon"
              // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
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
