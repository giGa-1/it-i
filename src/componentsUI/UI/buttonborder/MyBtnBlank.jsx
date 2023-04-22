import React from "react";
import cl from './MyBtnBlank.module.css'

const MyBtnBlank = ({children, classes, ...props})=>{
    return (
        <button className={[cl.myBtn, classes].join` `} {...props}>
            {children}
        </button>
    )
}

export default MyBtnBlank