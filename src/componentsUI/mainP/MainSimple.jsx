import React, {useState, useEffect, useMemo} from "react";

import cl from '../../style/MainSimple.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import MainSimpleList from "./MainSimpleList";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';


const MainSimple = () => {

    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const simpleTexts = useSelector(state=>state.AdminTexts.mainSimple)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}})
    const dispatch = useDispatch()

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainSimple', 'AT',simpleTexts)

  


    return (
        <section className={cl.simple}>
            <div className="container">
            <div className={cl.simpleContent}>
            {isAdmin?<MyAddElement typeAction={'ADD_SIMPLE_ELEMENT'}/>:''}
                <MyViewElement element={
                     isAdmin  && premissionGet === '200' ? 
                     <MyAdminInput width={sizeInfo.title.width}  fetchInfo={{item: adminTexts.mainSimple,id: "mainSimple", category: 'adminTexts'}}  height={sizeInfo.title.height} typeAction={'TITLE_SIMPLE_INFO'}>
                         <h2 className={cl.simpleTitle} onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{simpleTexts.title}</h2>
             
                     </MyAdminInput>
                     :
                     <h2 className={cl.simpleTitle}>{simpleTexts.title}</h2>
                    }/>
                   
                
                <MainSimpleList/>
            </div>
            </div>
        </section>
    )
}

export default MainSimple