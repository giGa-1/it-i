import React, { useRef,useState, useEffect, useMemo } from 'react';
import cl from './MyViewElement.module.css';
import { useInView } from 'react-intersection-observer';

const MyViewElement = ({element, permit = true})=>{
    const { ref, inView, entry } = useInView({threshold: 0.2})
    const [isViewElement, setIsViewElement] = useState(true)
    const [classes, setClasses] = useState([cl.disableElement])
   
   
    useMemo(()=>{
        if(inView)setClasses([...classes, cl.activeElement])
    },[inView])
    return (
       permit ? 
       <div ref={ref}>
            <div  className={classes.join` `}>
                {element}
            </div>
        </div>
       :
       element
       
    )
}

export default MyViewElement