

import { TaskList } from '../TaskList';
import style from  './styles.module.css'

export const CardActivity = () =>{   
        const taskds = [
        {
          title: "Tarefa 1",
          description: "Descrição da Tarefa 1",
          dueDate: new Date(2024, 3, 15),
          status: "pending",
          category: "Trabalho",
          review: "high",
        },
        {
          title: "Tarefa 2",
          description: "Descrição da Tarefa 2",
          dueDate: new Date(2024, 3, 20),   
          status: "completed",
          category: "Pessoal",  
          review: "medium",
        },
      ];
    
    return(
        <div className={style.container}>
            <TaskList tasks={taskds}/>
        </div>
    )
}

   