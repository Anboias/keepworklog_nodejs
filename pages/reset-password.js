import AuthPage from '../components/AuthPage';
import ResetPasswordForm from '../components/ResetPasswordForm';
import Link from 'next/link';

const ResetPasswordPage = () => {
  return (
    <AuthPage title="Reset Password">
      <ResetPasswordForm />
      <div className="bottom-text">
        <p>
          {"Didn't forgot? "}
          <Link href="/login">
            <a href="#">Login</a>
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};
export default ResetPasswordPage;
