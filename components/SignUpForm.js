import { useForm } from 'react-hook-form';
import { useAuth } from '../firebase/useAuth';
import { useRouter } from 'next/router';

const SignUpForm = () => {
  let labelClass = false;

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

  const handleChange = (event) => {
    event.target.value
      ? event.target.classList.add('withValue')
      : event.target.classList.remove('withValue');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="form-container">
        <div className="input-form">
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="false"
            className="input-text"
            onChange={handleChange}
            ref={register({ required: 'Please enter an name' })}
          />
          <span className="floating-label">Username</span>

          {errors.password && (
            <div className="errors">{errors.password.message}</div>
          )}
        </div>
        <div className="input-form">
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="false"
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
