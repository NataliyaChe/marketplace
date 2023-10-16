export interface IButtonProps {
    children: string,
    onClick:  (e: React.MouseEvent) => void,
    className: string,
    dataId?: number
}

function Button({children, onClick, className, dataId }: IButtonProps) {

    return(
        <button onClick={onClick} className={className} data-id={dataId}>{children}</button>
    )
}

export default Button