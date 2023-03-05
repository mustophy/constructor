import React from 'react'

const IconCard = ({ children, className, onClick }) => {
    return (
        <div onClick={onClick} className={`w-[50px] cursor-pointer border border-border/5 h-[50px] bg-dark-70 flex-center-all rounded-full ${className}`}>
            {children}
        </div>
    )
}

export default IconCard