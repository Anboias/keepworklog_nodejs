import Link from 'next/link';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <section className="authentication">
      <div className="container">
        <h2 className="title">Sign up</h2>
        <SignUpForm />
        <div>
          <p>
            {'Already have an account? '}
            <Link href="/login">
              <a href="#">Login</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
export default SignUpPage;
