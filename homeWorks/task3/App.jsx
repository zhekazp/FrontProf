const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = ({ name, index, delTask, changeTask }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const textId = React.useRef();
    const handleClickSave = () => {
        changeTask(index, textId.current.value);
        setIsEdit(false);
    }
    if (isEdit) {
        return (
            <>
                <div className="task">
                    <textarea className="changeInput" ref={textId} defaultValue={name}></textarea>
                    <button onClick={handleClickSave}>Save</button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="task">
                    <p>{name}</p>
                    <button onClick={() => setIsEdit(true)}>Edit</button>
                    <button onClick={() => delTask(index)}>Del</button>
                </div>
            </>
        );
    }
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState(["Task 1", "Task 2", "Task3"]);
    function delTask(index) {
        const newState = tasks.filter((item, i) => i !== index);
        setTasks(newState);
    }
    function changeState(index, newValue) {
        const newState = tasks.map((item, i) => i === index ? newValue : item);
        setTasks(newState);
    }
    return (
        <>
            {tasks.map((item, index) => (<Task key={Math.random()}
                name={item}
                index={index}
                delTask={delTask}
                changeTask={changeState}
            />))}
        </>
    );
}


root.render(
    <>
        <header className="header">
            <a href="../../"><span className="headerText">Frontend PROF</span></a>
        </header>
        <main className="mainBlock">
            <div className="info">
                <h3>Task MANAGER</h3>
                <TaskList />
            </div>

        </main>
        <footer className="footer">
            <h2 id="footer">{new Date().getFullYear()}</h2>
        </footer>
    </>
);