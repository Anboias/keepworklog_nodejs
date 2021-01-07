import { NextSeo } from 'next-seo';

const AuthPage = ({ children, title }) => {
  return (
    <>
      <NextSeo
        title="Keep Worklog - archive your daily tasks"
        description="Simplest todo app. Designed to easily archive and retrieve your tasks. Keep track of the work done."
        canonical="https://keepworklog.com"
      />
      <section id="authentication">
        <div className="container">
          <div className="left-section">
            <div className="intro">
              <h1>keepworklog.com</h1>
              {/* <h2>The simplest and most effective todo list app. Period.</h2> */}
              <h2>
                Simple and effective todo list app. Keep track of the work
                you've done - easily create and archive your tasks.
              </h2>
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
    </>
  );
};

export default AuthPage;
