import React, {useState} from "react";
import cl from '../../style/SeoReport.module.css'
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
const SeoReportItem = ({img, text, id,premissionLists, element})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [reportInfo, setReportInfo] = useState({title:{width:0,height:0},descr:{width:0,height:0}})
    return (
        <li className={cl.reportItemList}>
            {isAdmin?<MyDeleteElement typeAction={'DELETE_SEO_REPORT_ELEMENT'} id={id}></MyDeleteElement>:''}
            <div className={cl.reportItem}>
                <MyViewElement element={
                    <div className={cl.reportImgBlock}>
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6319 0.166016L6.03837 8.0621L2.4041 4.22079L0 6.45204L5.87134 12.6579L16.8661 2.56473L14.6319 0.166016Z" fill="#F84263"/>
                    </svg>
                </div>
                }/>
            <MyViewElement element={
                isAdmin && premissionLists == '200' ? 
                <MyAdminInput width={reportInfo.title.width} fetchInfo={{item: element, category: 'seoReport', id: id}} id={id} height={reportInfo.title.height} typeAction={'TEXT_SEO_REPORT_CHANGE'}>
                    <p className={cl.reportDescr} onClick={e=>setReportInfo({...reportInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{text}</p>
                </MyAdminInput>
                :
                <p className={cl.reportDescr}>{text}</p>
            }/>
            </div>
            
        </li>
    )
}

export default SeoReportItem