import styles from './styles.module.css'


interface ButtonProps{
    title: string
    style: string
    icon?: React.ReactNode
}

export const Button = ({style, title, icon}: ButtonProps) => {
    return(
        
            <button className={style}> {title} {icon}</button>
        
        
    )
}

