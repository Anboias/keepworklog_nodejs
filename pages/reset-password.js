import Link from 'next/link';
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPasswordPage = () => {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <h2 className="">Reset password</h2>
                    <p className="">
                        {"Didn't forgot? "}
                        <Link href="/login">
                            <a href="#" className="">Login</a>
                        </Link>
                    </p>
                </div>
                <div className="">
                    <ResetPasswordForm />
                </div>
            </div>
        </div>
    );
};
export default ResetPasswordPage;