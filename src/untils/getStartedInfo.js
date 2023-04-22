import { useDispatch } from "react-redux"
import { useFetchingGet } from "../hooks/useAdminChangeing"
import { useState } from "react"

export const getStartedInfo = (nameElement, typeAction,urlApi, dispatch) => {
    const getFetching = useFetchingGet(urlApi)
    getFetching.then(result=>{
       if(result){
        if(nameElement!=='-'){
            dispatch({type:typeAction, info: {text: {[nameElement]:result}}})
        }else{
            if(`${+(Object.keys(result)[0])}` === `${NaN}`) {
                Object.entries(result).forEach(([key,value])=>{
                    result[key] = JSON.parse(value)
                })
                dispatch({type:typeAction, info: {text:result}})
            } else {
                dispatch({type:typeAction, info: {text:Object.values(result).filter(e=>e!='null').map(e=>JSON.parse(e))}})

            }
           
        }
       }
       
    })
    return getFetching
   
}