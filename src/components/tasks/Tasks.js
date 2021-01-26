import Task from '../task/Task';

const Tasks = ({ taskList, deleteTask, setReminder }) => {
  return (
    <>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setReminder={setReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
