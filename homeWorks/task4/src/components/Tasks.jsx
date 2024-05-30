import {Task} from './Task';
import { useState } from 'react';
import { NewTask } from './NewTask';

function Tasks  ()  {
    
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task3"]);

    function delTask(index) {
        const newState = tasks.filter((item, i) => i !== index);
        setTasks(newState);
    }

    function changeState(index, newValue) {
        const newState = tasks.map((item, i) => i === index ? newValue : item);
        setTasks(newState);
    }

    function addTask(newTask) {
            setTasks([newTask, ...tasks]);
    }

    return (
        <>
            <NewTask addTask={addTask} />
            {tasks.map((item, index) => (
            <Task key={new Date().getTime + index}
                name={item}
                index={index}
                delTask={delTask}
                changeTask={changeState}
            />))}
        </>
    );
}

export {Tasks}
