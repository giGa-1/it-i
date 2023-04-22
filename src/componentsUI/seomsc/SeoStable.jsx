import React, {useState, useEffect, useMemo} from "react";

import cl from '../../style/SeoStable.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import SeoStableItem from "./SeoStableItem";
import { useSelector } from "react-redux";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const SeoStable = ()=>{

    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoStable)
    const [stableData, setStableData] = useState({title: {width:0,height:0}})
    const infoArr = useSelector(state=>state.SeoStable)

    const adminTexts = useSelector(state=>state.AdminTexts)
    const dispatch = useDispatch()

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'seoStable', 'AT',adminTexts.seoStable)


    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/seoStable",infoArr, 'SEO_STABLE_CHANGE_STATE') 


    return (
        <section className={cl.stableSection}>
            <div className="container">
                <MyViewElement element={
                    isAdmin  && premissionGet === '200'? 
                    <MyAdminInput width={stableData.title.width} fetchInfo={{item: seoTexts,id:"seoStable", category: 'adminTexts'}} height={stableData.title.height} typeAction={'TITLE_SEO_STABLE_INFO'}>
                        <h2 className={cl.stableTitle}  onClick={e=>setStableData({...stableData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.title}</h2>
                    </MyAdminInput>
                    :
                    <h2 className={cl.stableTitle}>{seoTexts.title}</h2>
                }/>
                
                <div className={cl.stableListBlock}>
                {isAdmin?<MyAddElement typeAction={'ADD_SEO_STABLE_ELEMENT'}></MyAddElement>:''}
                    <ul className={cl.stableList}>
                        {infoArr.map((e, i)=>
                            <SeoStableItem  premissionLists={premissionLists} element={e} title={e.title} id={e.id} descr={e.descr} key={i} img={e.img}/>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SeoStable