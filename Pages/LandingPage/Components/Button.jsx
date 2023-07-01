import React from 'react'

const Button = ({ type,onClick,childen}) => {
 switch (type) {
    case "primary":
        
        return <button onClick={onClick}>{childen}</button>
 
        case "default":
            return <button
            className='border text-[#000000] border-1 border-[#e0e0e0] px-6 rounded-3xl '
            onClick={onClick}>{childen}</button>
    default:
        return;
 }
}

export default Button