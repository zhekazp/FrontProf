import { useState } from "react"

interface ITask{
    addTask(task : string):void;
}
function NewTask(props: ITask) {
   const {addTask} = props;
    const  [ newTask, setNewTask] = useState<string>("");
    
    function checkNewTask(){
        if(newTask.trim()){
            addTask(newTask);
        }
        
        setNewTask("");
    }

    return(
    <div>
        <input
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            className="addTaskInput"
            type="text"
            placeholder="Enter new task..." />
        <button onClick={checkNewTask}>Add Task</button>
    </div>
    );
}

export { NewTask }