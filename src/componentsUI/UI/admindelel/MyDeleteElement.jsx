import React, {useState} from "react";
import cl from './MyDeleteElement.module.css';
import { useDispatch } from "react-redux";

const MyDeleteElement = ({typeAction, nameRedurer, id, count})=>{
    const [listElements, setListElements] = useState('')
    const dispatch = useDispatch()
    const addElement = ()=>{
        dispatch({type: typeAction, info: {id: id, count: count !== undefined ? count : ''}})
    }
    return (
        <div className={cl.plusElement} onClick={e=>addElement()}>
            <div className={cl.plusCard}>
                <span className={[cl.plusHorizontal, cl.plusLine].join` `}></span>
            </div>
        </div>
    )
}

export default MyDeleteElement