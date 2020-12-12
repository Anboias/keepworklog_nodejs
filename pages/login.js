import Link from 'next/link';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <section className="authentication">
      <div className="container">
        <h2 className="title">Log in</h2>
        <LoginForm />
        <div>
          <p>
            {"Don't have have an account? "}
            <Link href="/signup">
              <a href="#">Sign Up</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
