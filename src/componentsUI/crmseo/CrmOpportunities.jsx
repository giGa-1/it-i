import React, {useState, useEffect, useMemo} from "react";

import cl from '../../style/CrmOpportunities.module.css'
import MobileOppServ from "../mobilemsc/MobileOppServ";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";

const CrmOpportunities = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const crmTexts = useSelector(state=>state.AdminTexts.crmServices)
    const infoArr =  useSelector(state=>state.crmServices)
    const adminTexts = useSelector(state=>state.adminTexts)
    const [crmData, setCrmData] = useState({title: {width:0,height:0}})
    const dispatch = useDispatch()
    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'crmServices', 'AT',crmTexts)

   
    return (
        <section className={cl.crmSection}>
            <div className="container">
            <MyViewElement element={ 
                    isAdmin && premissionGet === '200' ? 
                        <MyAdminInput width={crmData.title.width} fetchInfo={{item: crmTexts,id: "crmServices", category: 'adminTexts'}} height={crmData.title.height} typeAction={'TITLE_SERVICES_CRM_PAGE_INFO'}>

                            <h2 className={cl.crmTitle} onClick={e=>setCrmData({...crmData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{crmTexts.title}</h2>
                        </MyAdminInput>
                    :
                     <h2 className={cl.crmTitle}>{crmTexts.title}</h2>
                }/>
                <MobileOppServ dataInfo={infoArr} />
            </div>
        </section>
    )
}

export default CrmOpportunities