import styles from './styles.module.css'


interface ButtonProps{
    title: string
    style: string
    icon?: React.ReactNode
    onClick: () => void
}

export const Button = ({style, title, icon, onClick}: ButtonProps) => {
    return(
        
            <button className={style} onClick={onClick}> {title} {icon} </button>
        
        
    )
}

