import React, {useState, useEffect, useMemo} from "react";

import cl from '../../style/SeoReport.module.css'
import SeoReportItem from "./SeoReportItem";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from "../UI/adminaddel/MyAddElement";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const SeoReport = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoReport)
    const dispatch = useDispatch()
    
    const adminTexts = useSelector(state=>state.AdminTexts)
    const infoArr =  useSelector(state=>state.SeoReport)
    const [reportInfo, setReportInfo] = useState({title:{width:0,height:0}, bottomTitle: {width:0,height:0},bottomDescr: {width:0,height:0},number: {width:0,height:0},value: {width:0,height:0}})
    
    
    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'seoReport', 'AT',seoTexts)

    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/seoReport",infoArr, 'REPOST_SEO_CHANGE_STATE') 

    
    
    return (
        <section className={cl.reportSection}>
            <div className="container">
                <MyViewElement element={
                     isAdmin&& premissionGet === '200'  ? 
                     <MyAdminInput width={reportInfo.title.width} fetchInfo={{item: seoTexts,id:"seoReport", category: 'adminTexts'}} height={reportInfo.title.height} typeAction={'TITLE_SEO_REPORT_INFO'}>
                         <h2 className={cl.reportTitle}  onClick={e=>setReportInfo({...reportInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.title}</h2>
                     </MyAdminInput>
                     :
                     <h2 className={cl.reportTitle}>{seoTexts.title}</h2>
                
                }/>
                <div className={cl.reportListBLock}>
                    {isAdmin?<MyAddElement typeAction={'ADD_SEO_REPORT_ELEMENT'}></MyAddElement>:''}
                    <ul className={cl.reportList}>
                        {infoArr.map((e, i)=><SeoReportItem premissionLists={premissionLists} element={e} text={e.text} id={e.id} key={i} />)}
                    </ul>
                </div>
                <MyViewElement element={
                     <div className={cl.reportResult}>
                     <div className={cl.reportImgRes}>
                     </div>
                     <div className={cl.reportMonth}>
                     {isAdmin&& premissionGet === '200'  ? 
                     <MyAdminInput width={reportInfo.number.width} fetchInfo={{item: seoTexts,id:"seoReport", category: 'adminTexts'}} height={reportInfo.number.height} typeAction={'NUMBER_SEO_REPORT_INFO'}>
                         <span className={cl.reportMCount} onClick={e=>setReportInfo({...reportInfo, number: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.number}</span>
                     </MyAdminInput>
                     :
                     <span className={cl.reportMCount}>{seoTexts.number}</span>
                     }
                       {  isAdmin&& premissionGet === '200'  ? 
                     <MyAdminInput width={reportInfo.value.width} fetchInfo={{item: seoTexts,id:"seoReport", category: 'adminTexts'}} height={reportInfo.value.height} typeAction={'VALUE_SEO_REPORT_INFO'}>
                         <span className={cl.reportMMonth} onClick={e=>setReportInfo({...reportInfo, value: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.value}</span>
                     </MyAdminInput>
                     :
                     <span className={cl.reportMMonth}>{seoTexts.value}</span>
                       }
                     </div>
                     <div className={cl.reportResText}>
                     {  isAdmin&& premissionGet === '200'  ? 
                        <MyAdminInput width={reportInfo.bottomTitle.width} fetchInfo={{item: seoTexts,id:"seoReport", category: 'adminTexts'}} height={reportInfo.bottomTitle.height} typeAction={'BOTTOM_TITLE_SEO_REPORT_INFO'}>

                            <h4 className={cl.reportResTitle}onClick={e=>setReportInfo({...reportInfo, bottomTitle: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.bottomTitle}</h4>
                        </MyAdminInput>
                        :
                        <h4 className={cl.reportResTitle}>{seoTexts.bottomTitle}</h4>
                       }
                       {  isAdmin&& premissionGet === '200'  ? 
                        <MyAdminInput width={reportInfo.bottomDescr.width} fetchInfo={{item: seoTexts,id:"seoReport", category: 'adminTexts'}} height={reportInfo.bottomDescr.height} typeAction={'BOTTOM_DESCR_SEO_REPORT_INFO'}>
                            <p className={cl.reportResDescr} onClick={e=>setReportInfo({...reportInfo, bottomDescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.bottomDescr}</p>
                        </MyAdminInput>
                        :
                        <p className={cl.reportResDescr}>{seoTexts.bottomDescr}</p>
                       }
                        
                         
                     </div>
                 </div>
                }/>
               
            </div>
        </section>
    )
}

export default SeoReport