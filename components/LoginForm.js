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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="email" className="">
          Email address
        </label>
        <div className="">
          <input
            id="email"
            className=""
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
          {errors.email && <div className="">{errors.email.message}</div>}
        </div>
      </div>
      <div className="">
        <label htmlFor="password" className="">
          Password
        </label>
        <div className="">
          <input
            id="password"
            className=""
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
          {errors.password && <div className="">{errors.password.message}</div>}
        </div>
      </div>
      <div className="mt-4 flex items-end">
        <div className="text-sm leading-5">
          <Link href="/reset-password">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <span className="block w-full rounded-md shadow-sm">
          {/* <button type="submit" className="" >Log in</button> */}
          <Button title="Login" type="submit" isLoading={isLoading} />
        </span>
      </div>
      {error?.message && (
        <div className="">
          <span>{error.message}</span>
        </div>
      )}
    </form>
  );
};

export default LoginForm;
