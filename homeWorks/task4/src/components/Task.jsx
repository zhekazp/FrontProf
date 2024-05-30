
import { useState } from 'react';
import { useRef } from 'react';

function Task  ({ name, index, delTask, changeTask })  {
    
    const [isEdit, setIsEdit] = useState(false);
    
    const textId = useRef();
    
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

export {Task}