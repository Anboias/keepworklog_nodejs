const Navbar = ({ handleLogout, name }) => (
  <nav>
    <ul className="container">
      <img className="logo-img" src="../assets/logo.svg" alt="Logo" />
      <li className="logo-txt">
        <a>keepworklog.com</a>
      </li>
      <li className="hello">
        <a>Hello, {name}</a>
      </li>
      <li className="signout">
        <a onClick={handleLogout}>Sign out</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
