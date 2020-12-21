import AuthPage from '../components/AuthPage';
import LoginForm from '../components/LoginForm';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <AuthPage title="Sign In">
      <LoginForm />
      <div className="bottom-text">
        <p>
          {"Don't have have an account? "}
          <Link href="/signup">
            <a href="#" className="orange">
              Sign Up
            </a>
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};
export default LoginPage;
