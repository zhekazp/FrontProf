import { useState } from "react"

function NewTask({addTask}) {
    
    const  [ newTask, setNewTask] = useState("");
    
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