import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/useAuth'

import Button from './Button';

const ResetPasswordForm = () => {

    const { register, errors, handleSubmit } = useForm();
    const auth = useAuth();
    const router = useRouter();

    const onSubmit = (data) => {
        auth.sendPasswordResetEmail(data.email);
        router.push('/login');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
                <label
                    htmlFor="email"
                    className=""
                >Email address </label>
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
                    {errors.email && (
                        <div className="">
                            {errors.email.message}
                        </div>
                    )}
                </div>
            </div>
            <div className="">
                <span className="">
                    {/* <button
                        type="submit"
                        className=""
                    >Send reset link</button> */}
                    <Button title="Send reset link" type="submit" isLoading={isLoading} />

                </span>
            </div>
        </form>
    );
};
export default ResetPasswordForm;