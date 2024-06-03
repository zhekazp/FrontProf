import { Task } from './Task';
import { useEffect, useState } from 'react';
import { NewTask } from './NewTask';

function Tasks(props) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        /*  fetch('https://jsonplaceholder.typicode.com/todos')
              .then(response => response.json())
              .then(response => response.map(item => item.title))
              .then(response => setTasks(response.slice(0,10)))
              .catch(reject => console.log(reject));*/
        const fetchTask = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setTasks(data.filter(item => item.userId === props.userId).map(e => e.title));
            } catch (err) {
                console.log(err);
            }
        }
        fetchTask();
    }, []);


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
        <>  <span onClick={() => { props.changePage(0) }}
            className='back'>&#129044;
            TO Users
        </span>
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

export { Tasks }
