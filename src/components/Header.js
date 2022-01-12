import { useState } from "react"
import Button from "./Button"


export default function Header({onClick, clicked}){
    
    return(
        <div className="header">
            <h1>TaskBar</h1>
            {!clicked? <Button onClick={onClick} text='Add'/>: <Button onClick={onClick} text='Remove'/>}
            
        </div>
        
    )
}