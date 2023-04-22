import React, { useState,useEffect, useRef,useMemo } from "react";
import cl from '../../style/KeysMainSeo.module.css';
import { useDispatch, useSelector } from "react-redux";
const KeysMainSeoInput = ({inputInfo, schedule, position, id, count})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const dispatch = useDispatch()
    const [value, setValue]=useState(0)
    const [context, setContext] = useState(false)
    const posInputItem = useRef('')
    const [isVisible, setIsVisible] = useState(false)
    const [isChange, setIsChange] = useState(false)
    const callbackEntriesFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const options = useMemo (()=>{
        return {
            root:null,
            rootMargin: '0px',
            threshold: 0.3
        }
    })

    useEffect(()=>{setIsChange(true)},[isChange])

    useMemo(()=>{
        if (isChange) { 
            console.log(schedule.change)
            schedule.change ?  posInputItem.current.style.maxHeight = (inputInfo.value / ((schedule.max+20) / 10000)) + '%'  : posInputItem.current.style.maxHeight = (inputInfo.value / ((schedule.max+20) / 100)) + '%' 
        }
    }, [value,posInputItem,options,schedule])


    useMemo(()=>{
        if ( isChange ) {
            const observer = new IntersectionObserver(callbackEntriesFunction, options);
            const currentTarget = posInputItem.current
            if(currentTarget) observer.observe(currentTarget);
            
            
            return ()=>{
                if(currentTarget) observer.unobserve(currentTarget)
            }
        }   

    },[posInputItem,options,value])
   
    const changeInputItem = (value) => {
        dispatch({type:'VALUE_INPUTS_SEO_KEYS_CHANGE', info : {id: id, count: count, text: value}})
        if(posInputItem.current.classList.contains(cl.animatInput))posInputItem.current.classList.remove(cl.animatInput)
    } 

    return (
        <div className={cl.inputBlock}  onContextMenu={(e)=>{e.preventDefault();setContext(!context)}}>
            <input type='range' defaultValue={inputInfo.value} orient="vertical" min={schedule.min-30} disabled={isAdmin ? false : true} onChange={e=>changeInputItem(e.target.value)} max={schedule.max} className={position ? cl.rangeRight : cl.rangeLeft}/>
            <span ref={posInputItem} className={isVisible ? position ? [cl.inputItemR, cl.animatInput].join` ` : [cl.inputItemL, cl.animatInput].join` ` : ''}></span>
        </div>
    )
}

export default KeysMainSeoInput