import React, { useEffect, useMemo} from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import cl from '../../style/SeoServices.module.css';
import SeoServicesItem from "./SeoServicesItem";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';


const SeoServices = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoServices)
    const servicesData = useSelector(state=>state.SeoServices)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const [servicesInfo,setServicesInfo] = useState({title: {width:0,height:0}})
    const dispatch = useDispatch()

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'seoServices', 'AT',seoTexts)

    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/seoServices",servicesData, 'SEO_SERV_CHANGE_STATE') 



    return (
        <section className={cl.servicesSection}>
            <div className={["container",cl.cont].join` `}>
            {isAdmin?<MyAddElement typeAction={'ADD_SEO_SERV_ELEMENT'}></MyAddElement>:''}
                {isAdmin  && premissionGet === '200'? 
                <MyAdminInput width={servicesInfo.title.width} fetchInfo={{item: seoTexts,id:"seoServices", category: 'adminTexts'}} height={servicesInfo.title.height} typeAction={'TITLE_SEO_SERVICES_INFO'}>
                    <h2 className={cl.servicesTitle} onClick={e=>setServicesInfo({...servicesInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.title}</h2>
                </MyAdminInput>
                 
                :
                 <h2 className={cl.servicesTitle}>{seoTexts.title}</h2>
                }
               
                <div className={cl.servicesCardList}>
                    <div className={cl.servicesLeft}>
                        
                        <ul className={cl.servicesList}>
                            {servicesData.filter((e,i,arr)=>e.id<=Math.ceil(arr.length/2)).map((e, i)=>
                            <>
                             <SeoServicesItem premissionLists={premissionLists} title={e.title} element={e} img={e.img} id={e.id} infoItem={e.infoArr} key={i}/>
                            </>
                               
                            )}
                        </ul>
                    </div>
                    <div className={cl.servicesRight}>
                        <ul className={cl.servicesList}>
                            {servicesData.filter((e,i,arr)=>e.id>Math.ceil(arr.length/2)).map((e, i)=>
                            <>
                             <SeoServicesItem premissionLists={premissionLists} title={e.title} element={e} img={e.img} id={e.id} infoItem={e.infoArr} key={i}/>
                            </>
                               
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoServices