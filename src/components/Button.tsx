export interface IButtonProps {
    onClick:  (e: React.MouseEvent) => void,
    children: string,
    dataId: number | null,
}

function Button({ onClick, children, dataId }: IButtonProps) {
// const Button : React.FC<IButtonProps> = ({ onClick, children, dataId }) => {
    return(
        <button onClick={onClick} className='button' data-id={dataId}>{children}</button>
    )
}

export default Button