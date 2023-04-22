import React, {useState} from "react";
import cl from '../../style/SeoMonth.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from "react-redux";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
const SeoMonthItem = ({title,premissionLists, element, descr, id})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [monthData, setMonthData] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})
    return (
        <>
            <li className={cl.monthItem}>
            {isAdmin?<MyDeleteElement id={id} typeAction={'DELETE_SEO_MONTH_ELEMENT'}></MyDeleteElement>:''}
                <MyViewElement element={
                     isAdmin && premissionLists == '200' ? 
                     <MyAdminInput width={monthData.title.width}  fetchInfo={{item: element, category: 'seoMonth', id: id}} id={id} height={monthData.title.height} typeAction={'TITLE_SEO_MONTH_ITEM_CHANGE'}>
                         <h4 className={cl.monthITitle}  onClick={e=>setMonthData({...monthData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h4>
                     </MyAdminInput>
                     :
                     <h4 className={cl.monthITitle}>{title}</h4>
                    
                }/>
                <MyViewElement element={
                isAdmin && premissionLists == '200' ? 
                <MyAdminInput width={monthData.descr.width}  fetchInfo={{item: element, category: 'seoMonth', id: id}} id={id}  height={monthData.descr.height} typeAction={'DESCR_SEO_MONTH_CHANGE'}>
                    <p className={cl.monthIDescr}  onClick={e=>setMonthData({...monthData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                </MyAdminInput>
                :
                <p className={cl.monthIDescr}>{descr}</p>
               
                }/>

            </li>
        </>
        
    )
}

export default SeoMonthItem