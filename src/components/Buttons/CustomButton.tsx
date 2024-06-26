import "./CustomButton.css"

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    className?: string,
    disabled?: boolean,
    action?: () => void,
}

const CustomButton : React.FC<CustomButtonProps> = 

({text,  className, disabled, action, ...props}) => {
 
    return (
        <button
            {...props}
            className={`custom-button ${className}`}
            disabled={disabled}
            onClick={action}
        >
            {text}
        </button>
    )
}



export default CustomButton