import Button from "./Button"
import { useState } from "react"

export default function TaskAdder({onSubmit}){

    let [input, setInput] = useState('')

    function onChange(e){
        setInput(e.target.value)
    }


    return (
        <form value={input} onSubmit={onSubmit}>
        <input type="text" onChange={onChange} placeholder="Write Next Task Here" />
        <Button text='Submit'/>
        </form>
    )
}