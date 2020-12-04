import Weekday from './Weekday';

const Weeks = () => (
  <section id="weeks">
    <div className="container">
      <Weekday
        day="Monday, 23"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit Suscipit
                eligendi fugiat."
      />

      <Weekday
        day="Tuesday, 24"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit Suscipit
                eligendi fugiat."
      />

      <Weekday
        day="Wednesday, 25"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit Suscipit
                eligendi fugiat."
      />

      <Weekday
        day="Thursday, 26"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit Suscipit
                eligendi fugiat."
      />

      <Weekday
        day="Friday, 27"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit Suscipit
                eligendi fugiat."
      />

      <Weekday day="Saturday, 28" content={null} />

      <Weekday day="Sunday, 29" content={null} />
    </div>
  </section>
);

export default Weeks;
