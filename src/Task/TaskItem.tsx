import React from 'react';
import {Task} from "../App";

interface TaskItemProps {
    task: Task
    removeTask: () => void
}

const TaskItem: React.FC<TaskItemProps> = ({task, removeTask}) => {
    return (
        <div className="task">
            <p>{task.text}</p>
            <button onClick={removeTask}>DELETE</button>
        </div>
    );
};

export default TaskItem;