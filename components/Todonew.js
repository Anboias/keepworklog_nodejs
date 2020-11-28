const Todonew = () => (
  <section id="todonew">
    <div className="container">
      <form autocomplete="off">
        <i className="fas fa-plus-circle fa-3x"></i>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Add a new task. Keep it simple. Around 150 chars should be enough."
          maxlength="150"
        /><br />
      </form>
    </div>
  </section>
)

export default Todonew;