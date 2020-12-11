import { useForm } from 'react-hook-form';
import { auth, db } from '../firebase/firebaseConfig';
import Button from './Button';
import { useAuth } from '../firebase/useAuth';

const SignUpForm = () => {
  // Needs to be replaced with real value
  const isLoading = false;

  const auth = useAuth();

  const { signUp } = auth;

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const user = await signUp(data);
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
      <div className="">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          id="name"
          className=""
          type="text"
          name="name"
          autocomplete="false"
          ref={register({ required: 'Please enter an name' })}
        />
        {errors.password && <div className="">{errors.password.message}</div>}
      </div>
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
            autocomplete="false"
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
      <div className="">
        <span className="">
          {/* <button type="submit" className="">Sign up </button> */}
          <Button title="Sign up" type="submit" isLoading={isLoading} />
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
