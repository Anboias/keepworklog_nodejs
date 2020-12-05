import TodolistElement from './TodolistElement';

const WeeksElement = ({ day, content, data }) => (
  <div className="weekday">
    <h1>{day}</h1>
    <i className="far fa-copy"></i>

    <ul className="weekday-list sortable">
      <>
        {data
          .filter((all) => all.status === 'done')
          .map((todo) => {
            return <TodolistElement todo={todo} />;
          })}
      </>
    </ul>
  </div>
);

export default WeeksElement;
