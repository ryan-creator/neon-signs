import { useState } from 'react';
import './css/Button.css';

export const Button = (props: {label: string, colour: string}) => {

    const [hover, setHover] = useState(false);

    const style = {
        color: props.colour,
        backgroundColor: 'transparent',
        border: `0.25rem solid ${props.colour}`,
        boxShadow:  `0 0 1rem ${props.colour}, inset 0 0 1rem ${props.colour}`,
        textShadow: `0 0 1rem ${props.colour}`
    }

    const hoverStyle = {
        color: 'black',
        backgroundColor: props.colour,
        border: `0.25rem solid ${props.colour}`,
        boxShadow:  `0 0 6rem ${props.colour}`
    }

    return (
            <button 
            className="button"
            style={hover ? hoverStyle : style}  
            onMouseEnter={()=>{
                setHover(true)
              }}
            onMouseLeave={()=>{
            setHover(false)
            }}>
                {props.label}
            </button>
    )
}