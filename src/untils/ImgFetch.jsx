import React, {useRef, useMemo, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useFetchingImg } from '../hooks/useAdminChangeing';
const MyFormData = ({isImg,setSrcImgDrop,id,typeAction, count})=>{
    const formRef = useRef()
  
    let form = ''
   
    const dispatch = useDispatch()
    useEffect(()=>{
         form = new FormData()
    },[formRef])

  


    useMemo(()=>{
        if(isImg){
            form = new FormData()
            form.append("file", isImg, isImg.name)
          
            const fetchImg = useFetchingImg(form).then((fetch)=>{
                console.log(fetch)
                dispatch({type:typeAction,info:{id:id,text:fetch.filename, count: count}})
            })
           
        }
    },[isImg])

    return (
        <div style={{'position':'absolute'}}></div>
    )

}


export default MyFormData