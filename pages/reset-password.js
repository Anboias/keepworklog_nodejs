import Link from 'next/link';
import ResetPasswordForm from '../components/ResetPasswordForm';

const ResetPasswordPage = () => {
  return (
    <section className="authentication">
      <div className="container">
        <h2 className="title">Reset password</h2>
        <ResetPasswordForm />
        <div>
          <p>
            {"Didn't forgot? "}
            <Link href="/login">
              <a href="#">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default ResetPasswordPage;
