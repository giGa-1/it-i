import React, { useRef, useState,useMemo } from 'react';
import cl from './MyAdminInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchingPost } from '../../../hooks/useAdminChangeing';
import { useEffect } from 'react';



const MyAdminInput = ({width, height,btnsDirection = 1, typeAction, count,complitedSave, children,isAdminText=1, id, number, fetchInfo,setPremissionFetching,premissionFetching })=>{
    const [isChange, setIsChange] = useState(undefined)
    const [blockChild, setBlockChild] = useState(width)
    const dispatch = useDispatch();
    const [valueArea, setValueArea] = useState(children.props.children) 

    // useMemo(()=>{
    //     if(premissionFetching){
    //         const testPost = fetchInfo.id ? useFetchingPost(fetchInfo.item, fetchInfo.category, fetchInfo.id) :  useFetchingPost(fetchInfo.item, fetchInfo.category)
    //         setPremissionFetching(0)
    //     }
    // },[fetchInfo])
    

    const saveChange = ()=>{
        console.log({text: valueArea, id: id, })
        dispatch({type: typeAction, info: {text: valueArea, id: id, count: count, number: number}})
      
        setIsChange(false)
    }
    const сancellationChange = (e)=>{
        e.preventDefault()
        setValueArea(children.props.children) 
        setIsChange(false)
    }

    const getChildAndActive = (e)=>{
        setIsChange(true)
    }
   


    return (
        <> 
            <div className={cl.changeBlock} >
                {isChange ? 
                    <label className={cl.labelAdmin} >
                        <textarea type='text' name='changeItem' value={valueArea} onChange={e=>setValueArea(e.target.value)}  className={[cl.inputAdmin, children.props.className].join` `} style={{width: width + 2, height: height}}/>
                        <span className={btnsDirection ?cl.saveAdmin:cl.saveAdminBottom} onClick={e=>saveChange(e)}>save</span>
                        <span className={btnsDirection ?cl.cancelAdmin:cl.cancelAdminBottom} onClick={e=>сancellationChange(e)}>cancel</span>
                    </label>
                :
                <div  onClick={e=>getChildAndActive(e)}>
                    { children }
                </div>
                }
            </div>
        </>
    )
}

export default MyAdminInput