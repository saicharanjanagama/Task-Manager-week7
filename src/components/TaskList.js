import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";


const TaskList = ({ filter }) => {
    const tasks = useSelector((state) => state.tasks);

    const filteredTasks = filter === "all" ? tasks : tasks.filter((t) => t.status === filter);
    if (filteredTasks.length === 0) return <p>No tasks available</p>

    return (
        <div>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
            )}
        </div>
    );
}

export default TaskList;