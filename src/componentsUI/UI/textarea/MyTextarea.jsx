import React, {useMemo, useState, useRef} from "react";
import cl from './MyTextarea.module.css';

const MyTextarea = (props)=>{
  
    
    const {classesTextarea, classesPlace, place, setTextarea, textarea, textareaValue} = props
    return (
        <label className={cl.textareaBlock} htmlFor='txt'>
            <textarea required id='txt' className={[cl.myTextarea, classesTextarea].join` `} value={textareaValue} onChange={e=>setTextarea({...textarea, question: e.target.value})}/>
            <span className={[cl.textareaPlace, classesPlace].join` `}>{place}</span>
        </label>
       
    )
}

export default MyTextarea