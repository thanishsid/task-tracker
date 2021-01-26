import { useState } from 'react';

const AddTask = () => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState(false);

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(event) => setText(event.target.value)}
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
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
        <label>Set Reminder</label>
      </div>

      <input className='btn btn-block' type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;
