import Reaact, { useState, useEffect } from 'react';
import data from '../data';

const Todonew = () => {
  const [todos, setTodos] = useState(null);
  const [value, setValue] = useState('');
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    setTodos(updateTodoList());
  }, [userId]);

  // useEffect(() => {
  //   fetch('../data', {
  //     method: 'PUT'
  //   })
  //     .then((res) => res.json())
  //     .then((videos) => videos.filter((video) => {
  //       return video.id === videoID;
  //     }))
  //     .then((matched) => setVideo(matched[0]));
  // }, []);

  const updateTodoList = () => {
    // alert('oook');
    return data.filter((todoEL) => todoEL.status === 'open');
  };

  const handleClick = (e) => {
    let newTodo = {};
    newTodo.id = '20';
    newTodo.status = 'open';
    newTodo.date = '20210104';
    newTodo.content = value;

    setTodos([...todos, newTodo]);
    setValue('');
    e.preventDefault();

    // setTodos(oldTodos => [...oldTodos, e.target.value]);
  };

  return (
    <section id="todonew">
      <div className="container">
        <form autoComplete="off">
          <button onClick={handleClick}>
            <i className="fas fa-plus-circle fa-3x"></i>
          </button>
          {/* <h1>DATA {JSON.stringify(data}</h1> */}
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            id="fname"
            name="fname"
            placeholder="Add a new task. Keep it simple. Around 150 chars should be enough."
            maxLength="150"
          />
          <br />
        </form>
        {/* <p>WTF {JSON.stringify(todos)}</p> */}
        {/* <p>WTF {value}</p> */}
      </div>
    </section>
  );
};

export default Todonew;
