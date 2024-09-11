import React, { useState } from 'react';

let nextId = 0;

function ToDoList() {
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  return (
    <div className='mx-4'>
      <div className='grid gap-4 md:gap-12 md:grid-cols-2'>
        <div className="mt-8 bg-orange-100 rounded-xl h-[700px] text-orange-900 text-4xl text-center py-8">
          <h1>To-do:</h1>
          <div className='mt-4 text-lg'>
            <div className='text-orange-900 flex'>
              <input 
                value={task} 
                onChange={e => setTask(e.target.value)} 
                className='border-2 border-orange-900 w-[280px] ml-8 rounded-md'
              />
              <div className='bg-orange-900 w-[50px] text-white rounded-md'>
                <button onClick={() => {
                  setAllTasks([
                    ...allTasks,
                    { id: nextId++, name: task }
                  ]);
                  setTask('');
                }}>
                  Add
                </button>
              </div>
            </div>
            <ul className='text-orange-900 text-left text-lg ml-8 mt-4'>
              {allTasks.map(props => (
                <li key={props.id} className='mb-2'>
                  {props.name}
                  <button 
                    className='ml-4 text-white bg-orange-900 px-2 text-md rounded-md'
                    onClick={() => {
                      setDoneTasks([
                        ...doneTasks,
                        { id: props.id, name: props.name }
                      ]);
                      setAllTasks(allTasks.filter(a => a.id !== props.id));
                    }}>
                    Done
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-orange-100 h-[700px] text-orange-900 text-4xl text-center py-8">
          <h1>Done:</h1>
          <div>
          <ul className='text-orange-900 text-left text-lg ml-8 mt-4'>
            {doneTasks.map(props => (
              <li key={props.id} className='mb-2'>
                {props.name}
                <button 
                    className='ml-4 text-white bg-orange-900 px-2 text-md rounded-md'
                    onClick={() => {
                      setDoneTasks(doneTasks.filter(a => a.id !== props.id));
                    }}>
                    Delete
                  </button>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
