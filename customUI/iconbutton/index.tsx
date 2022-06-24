import React from 'react'

import styles from './iconbutton.module.sass'

interface iIconButton {
    children: React.ReactChild,
    className?: string,
    disabled?: boolean,
    sx?: object,
    onClick?: () => void
}

export function IconButton (
    {
        children,
        className = "",
        disabled = false,
        onClick,
        sx
    }:iIconButton) {

    return (
    <button 
        disabled={disabled}
        className={`${styles.button} ${className}`}
        style={{...sx}}
        onClick={onClick}
    >
        {children}
    </button>
    )
}