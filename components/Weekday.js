import TodolistElement from './TodolistElement';

const WeeksElement = ({ day, content, isDone }) => (
  <div className="weekday">
    <h1>{day}</h1>
    <i className="far fa-copy"></i>

    <ul className="weekday-list sortable">
      {content && (
        <>
          <TodolistElement content={content} isDone={true} />
          <TodolistElement content={content} isDone={true} />
          <TodolistElement content={content} isDone={true} />
        </>
      )}
    </ul>
  </div>
);

export default WeeksElement;
