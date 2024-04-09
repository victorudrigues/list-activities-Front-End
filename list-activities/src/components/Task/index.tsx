  
  export const TaskItem: React.FC<{ task: TaskProps}> = ({task}) => {
      
    return (
      <div className="task-content">  {/* New wrapper div for styling */}
        <h3 className="item-title">{task.title}</h3>
        {task.description && <p className="item-description">{task.description}</p>}
        {task.dueDate && <span className="item-due-date">{task.dueDate.toLocaleDateString()}</span>}
        {task.status && <span className="item-status">{task.status}</span>}
        {task.category && <span className="item-category">{task.category}</span>}
        {task.review && <span className="item-review">{task.review}</span>}
      </div>
    );
  };
  
  