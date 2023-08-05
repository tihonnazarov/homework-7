import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (

      <div className="App m-auto w-1/4 h-auto mt-10 p-10 bg-black bg-opacity-30 rounded-md">
        <h1 className="gap-10 bg-purple-500 rounded-2xl flex justify-center p-4 border-2 border-black">Список задач <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"/>
        </svg>
        </h1>

        <div className="mt-10 flex gap-10">
          <input className="bg-purple-500 rounded border-black border-2 placeholder-black placeholder:text-center outline-0"
              type="text"
              placeholder="Введите задачу"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
          />
          <button className="p-2 rounded-2xl opacity:bg border-2 border-black hover:bg-purple-500 transition delay-150 duration-300 ease-in-out" onClick={addTask}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
          </button>
        </div>
        <ul className="flex justify-between flex-col gap-2" >
          {tasks.map((task, index) => (
              <li className="flex gap-10 mt-10"
                  key={index}
                  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
            <span className="hover:bg-purple-400 bg-purple-500 transition delay-150 duration-300 ease-in-out p-2 rounded-2xl border-2 border-black inline-flex gap-5 whitespace-nowrap" onClick={() => toggleTaskCompletion(index)}>
              {task.text}
              <svg
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round"
                   d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"/>
              </svg>
            </span>
                <button className="p-2 rounded-2xl opacity:bg border-2 border-black hover:bg-purple-500 transition delay-150 duration-300 ease-in-out" onClick={() => removeTask(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                  </svg>
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;

