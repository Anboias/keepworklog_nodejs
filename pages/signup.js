import AuthPage from '../components/AuthPage';
import SignUpForm from '../components/SignUpForm';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <AuthPage title="Register">
      <SignUpForm />
      <div className="bottom-text">
        <p>
          {'Already have an account? '}
          <Link href="/login">
            <a href="#" className="orange">
              Login
            </a>
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};
export default SignUpPage;
