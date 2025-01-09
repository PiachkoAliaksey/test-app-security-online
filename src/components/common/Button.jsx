import React from 'react';


const Button = ({ onClick, title, children }) => {
    return (
        <button className='flex gap-2 items-center text-[#E95721]' onClick={()=>onClick(prev=>!prev)}>{children}{title}</button>
    )
}

export default Button