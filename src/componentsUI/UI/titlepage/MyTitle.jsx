import React, {useState, useEffect, useMemo} from "react";

import cl from './MyTitle.module.css'
import { useSelector } from 'react-redux';
import MyAdminInput from '../admininput/MyAdminInput';
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../../hooks/useChangeStateFirst';

const MyTitle = ({title, classes, typeAction, fetchInfo, ...props})=>{
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [titlesData, setTitlesData] = useState({title: {width:0,height:0}})
    const dispatch = useDispatch()
    const adminTexts = useSelector(state=>state.AdminTexts)

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, fetchInfo.id, 'AT',adminTexts[fetchInfo.id])

  

    return (
        isAdmin && premissionGet === '200' ? 
            <MyAdminInput width={titlesData.title.width} fetchInfo={fetchInfo} height={titlesData.title.height} typeAction={typeAction}>
                <h1 className={[cl.title, classes].join` `} onClick={e=>setTitlesData({...titlesData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})} {...props}>{title}</h1>
            </MyAdminInput>
            :
            <h1 className={[cl.title, classes].join` `} {...props}>{title}</h1>
            
       
    )
}
export default MyTitle