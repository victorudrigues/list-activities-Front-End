import { Button } from "../Button";
import styles from "./styles.module.css";
import { Plus } from 'lucide-react';

export const Header = () => {
    function handlerClick () {
        console.log("teste")
    }

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <div>
        <h1>Lista de atividades</h1>
        <div className={styles.infoAvatar}>
          <p>foto</p>
          <p>Victor Hugo</p>
        </div>
        </div>
        
        
        <Button style={styles.button} icon={<Plus size={20}/>} title="Criar nova atividade"/>
        
      </div>
    </header>
  );
};
