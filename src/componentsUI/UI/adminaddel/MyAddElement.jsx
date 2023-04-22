import React, {useEffect} from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cl from './MyAddElement.module.css';


const MyAddElement = ({typeAction, id})=>{
    const dispatch = useDispatch()
    const addElement = ()=>{
        dispatch({type: typeAction,info: id !== undefined ? {id: id}: [0]})
    }
    return (
        <div className={cl.plusElement} onClick={e=>addElement()}>
            <div className={cl.plusCard}>
                <span className={[cl.plusHorizontal, cl.plusLine].join` `}></span>
                <span className={[cl.plusVertical, cl.plusLine].join` `}></span>
            </div>
        </div>
    )
}

export default MyAddElement