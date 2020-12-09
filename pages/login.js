import Link from 'next/link';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <section id="login">
      <div className="container">
        <h2 className="title">Log in</h2>
        <LoginForm />
        <p className="">
          {"Don't have an account? "}
          <Link href="/signup">
            <a href="#" className="">
              Sign Up
            </a>
          </Link>
        </p>
      </div>
    </section>
  );
};
export default LoginPage;
