import { useRouter } from 'next/router';

const Navbar = ({ handleLogout, name }) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <nav>
      <ul className="container">
        <img className="logo-img" src="../assets/logo.svg" alt="Logo" />
        <li className="logo-txt">
          <a>
            keepworklog.com <span className="beta">Beta</span>
          </a>
        </li>
        <li className="hello">
          <a>Hello, {name}</a>
        </li>
        <li className="signout">
          {handleLogout ? (
            <a onClick={handleLogout}>Sign out</a>
          ) : (
            <a onClick={handleLogin}>Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
