const AuthPage = ({ children, title }) => {
  return (
    <section id="authentication">
      <div className="container">
        <div className="left-section">
          <div className="intro">
            <h1>keepworklog.com</h1>
            <h2>The simplest and most effective todo list app. Period.</h2>
          </div>
        </div>
        <div className="right-section">
          {/* <div className="auth-title"> */}
          <h1>{title}</h1>
          {/* </div> */}
          {children}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
