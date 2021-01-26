import { useState } from 'react';

import Header from './components/header/Header';

import Tasks from './components/tasks/Tasks';

import AddTask from './components/addTask/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Cycling road trip',
      day: 'Jan 22nd at 3:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Marinate the meat',
      day: 'Jan 23rd at 9:30am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Setup the BBQ',
      day: 'Jan 23rd at 3:30pm',
      reminder: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  //toggle add task form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  //add task function
  const addTask = (task) => {
    const newId = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id: newId, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder function

  const setReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header showForm={showForm} toggleForm={toggleForm} />
      {showForm && <AddTask addTask={addTask} />}
      {tasks.length ? (
        <Tasks
          taskList={tasks}
          deleteTask={deleteTask}
          setReminder={setReminder}
        />
      ) : (
        <p className='noMsg'>No Tasks</p>
      )}
    </div>
  );
}

export default App;
