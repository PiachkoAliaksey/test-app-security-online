import React from 'react'

const Field = ({ title, text,children }) => {
    return (
        <div className='flex gap-5 text-[14px]'>
            <span className='text-[#444444] min-w-[80px]'>{title}</span>
            {children}
        </div>
    )
}

export default Field