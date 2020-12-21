import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/useAuth';

import Button from './Button';

const ResetPasswordForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const auth = useAuth();
  const router = useRouter();

  const onSubmit = (data) => {
    auth.sendPasswordResetEmail(data.email);
    router.push('/login');
  };

  const handleChange = (event) => {
    event.target.value
      ? event.target.classList.add('withValue')
      : event.target.classList.remove('withValue');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <div className="input-form">
          <div>
            <input
              id="email"
              type="email"
              name="email"
              className="input-text"
              ref={register({
                required: 'Please enter an email',
                pattern: {
                  // value: /^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/,
                  message: 'Not a valid email',
                },
              })}
            />
            <span className="floating-label">Email address </span>

            {errors.email && (
              <div className="errors">{errors.email.message}</div>
            )}
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="button">
          <span>
            <button type="submit" className="auth-button">
              Send reset link
            </button>
            {/* <Button title="Send reset link" type="submit" isLoading={isLoading} /> */}
          </span>
        </div>
      </div>
    </form>
  );
};
export default ResetPasswordForm;
