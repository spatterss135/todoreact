export default function Button({onClick, text, index}){
    return(
        <button index={index} onClick={onClick}>{text}</button>
    )
}