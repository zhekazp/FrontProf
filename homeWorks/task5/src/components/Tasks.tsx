import { Task } from './Task';
import { useEffect, useState } from 'react';
import { NewTask } from './NewTask';

interface ITaskJson {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

interface IUserId {
    userId: number
    changePage(n : number): void
}

function Tasks(props: IUserId) {

    const [tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setTasks(data.filter((item: ITaskJson) => item.userId === props.userId).map((e: ITaskJson) => e.title));
            } catch (err) {
                console.log(err);
            }
        }
        fetchTask();
    },[]);


    function delTask(index : number) {
        const newState = tasks.filter((item, i) => item && i !== index);
        setTasks(newState);
    }

    function changeState(index : number, newValue: string) {
        const newState = tasks.map((item, i) => i === index ? newValue : item);
        setTasks(newState);
    }

    function addTask(newTask: string) {
        setTasks([newTask, ...tasks]);
    }

    return (
        <>  <span onClick={() => { props.changePage(0) }}
            className='back'>&#129044;
            TO Users
        </span>
            <NewTask addTask={addTask} />
            {tasks.map((item, index) => (
                <Task key={new Date().getTime() + index}
                    name={item}
                    index={index}
                    delTask={delTask}
                    changeTask={changeState}
                />))}
        </>
    );
}

export { Tasks }
