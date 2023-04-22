import React from "react";
import cl from './MyMail.module.css';

const MyMail = ({children, classes,  ...props})=>{
    return (
        <a {...props} className={[cl.myMail, classes].join` `}>{children}</a>
    )
}

export default MyMail