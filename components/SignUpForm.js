import { useForm } from 'react-hook-form';
import { useAuth } from '../firebase/useAuth';
import { useRouter } from 'next/router';

const SignUpForm = () => {
  // Needs to be replaced with real value
  const isLoading = false;

  const router = useRouter();

  const auth = useAuth();

  const { signUp } = auth;

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const user = await signUp(data).then(router.push('/'));
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="form-container">
        <div className="input-form">
          <label htmlFor="name">Name</label>
          <div>
            <input
              id="name"
              type="text"
              name="name"
              autocomplete="false"
              ref={register({ required: 'Please enter an name' })}
            />
            {errors.password && (
              <div className="errors">{errors.password.message}</div>
            )}
          </div>
        </div>
        <div className="input-form">
          <label htmlFor="email">Email address</label>
          <div>
            <input
              id="email"
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
            {errors.email && (
              <div className="errors">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div className="input-form">
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
      </div>
      <div className="buttons">
        <div className="button">
          <span>
            <button type="submit" className="auth-button">
              Sign up
            </button>
            {/* <Button title="Sign up" type="submit" isLoading={isLoading} /> */}
          </span>
        </div>
      </div>
      <div></div>
    </form>
  );
};

export default SignUpForm;
