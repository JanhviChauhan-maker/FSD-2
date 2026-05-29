import { useState } from 'react';

function Task4() {
    const [task, settask] = useState("");
    const [todo, settodo] = useState([]);

    const addTask = () => {
        if (!task.trim()) return; // Optional: prevents adding empty tasks
        settodo([...todo, { id: Date.now(), name: task }]);
        settask(""); // Clears the input field
    };

    const deletetask = (id) => {
        settodo(todo.filter((item) => item.id !== id));
    };

    return (
        <>
            <div>
                <input 
                    type='text' 
                    value={task} 
                    onChange={(e) => settask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
                
                {todo.map((t) => (
                    <div key={t.id}>
                        <h3>{t.name}</h3>
                        <button onClick={() => deletetask(t.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Task4;
