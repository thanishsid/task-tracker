import { FaTrash } from 'react-icons/fa';

const Task = ({ task, deleteTask, setReminder }) => {
  return (
    <div
      className={`${task.reminder && 'reminder'} task noSelect`}
      onDoubleClick={() => setReminder(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTrash className='trashIcon' onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.time}</p>
    </div>
  );
};

export default Task;
