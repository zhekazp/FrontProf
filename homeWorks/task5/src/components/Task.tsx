
import { useState, useRef } from 'react';

interface ITask{
    name: string, 
    index: number, 
    delTask(id: number): void, 
    changeTask(index: number, name:string | undefined):void
}

function Task  (props: ITask)  {
    const
    { name, index, delTask, changeTask }= props;

    const [isEdit, setIsEdit] = useState<boolean>(false);
    
    const textId = useRef<HTMLTextAreaElement>(null);
    
    const handleClickSave = () => {
        changeTask(index, textId.current?.value);
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

export {Task}