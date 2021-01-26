import { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask({ text, time, reminder });

    setText('');
    setTime('');
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <input
          type='checkbox'
          checked={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
        <label>Set Reminder</label>
      </div>

      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;
