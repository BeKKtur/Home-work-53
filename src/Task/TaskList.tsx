import React from 'react';
import {Task} from "../App";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[]
    removeTask: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({tasks, removeTask}) => {
    if (!tasks.length) {
        return <p>Nothing</p>
    }
    return (
        <>
            {tasks.map(task => <TaskItem removeTask={() => removeTask(task.id)} task={task}/>)}
        </>
    );
};

export default TaskList;