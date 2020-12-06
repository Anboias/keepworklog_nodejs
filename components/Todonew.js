const Todonew = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <section id="todonew">
      <div className="container">
        <form autoComplete="off">
          <button onClick={handleClick}>
            <i className="fas fa-plus-circle fa-3x"></i>
          </button>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Add a new task. Keep it simple. Around 150 chars should be enough."
            maxLength="150"
          />
          <br />
        </form>
      </div>
    </section>
  );
};

export default Todonew;
