import React from 'react';
import { TaskItem } from '../Task';
import style from './style.module.css';


type TaskListProps = {
    tasks: TaskProps[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="list-items">
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="list-item">
                        <TaskItem task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};