import React, {useState,useMemo} from "react";
import cl from '../../style/MainSimple.module.css';
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyDeleteElement from "../UI/admindelel/MyDeleteElement";

const MainSItem = ({title, descr,premissionLists, count, id, element})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, count: {width:0,height:0}})
    const [permitView, setPermitView] = useState(1)
    if(typeof window !== "undefined"){
        useMemo(()=>{
            if(window.innerWidth<=576){
                setPermitView(0)
            }
        },[window.innerWidth])
    }
    return (
        
            <li className={cl.simpleItem}>
                {isAdmin?<MyDeleteElement id={id} typeAction={'DELETE_SIMPLE_ELEMENT'}/>:''}
                <MyViewElement permit={permitView} element={
                     isAdmin&& premissionLists == '200' ? 
                     <MyAdminInput width={sizeInfo.count.width}  fetchInfo={{item: element, category: 'mainSimple', id: id}} id={id} height={sizeInfo.count.height} typeAction={'COUNT_SIMPLE_ITEM_CHANGE'}>
                          <div className={cl.simpleCount}  onClick={e=>setSizeInfo({...sizeInfo, count: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{count}</div>
                     </MyAdminInput>
                     :
                     <div className={cl.simpleCount}>{count}</div>
                    
                }/>
                <MyViewElement permit={permitView} element={
                      isAdmin&& premissionLists == '200' ? 
                      <MyAdminInput width={sizeInfo.title.width} fetchInfo={{item: element, category: 'mainSimple', id: id}} id={id} height={sizeInfo.title.height} typeAction={'TITLE_SIMPLE_ITEM_CHANGE'}>
                             <h3 className={cl.simpleItemTitle}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{title}</h3>
                      </MyAdminInput>
                      :
                      <h3 className={cl.simpleItemTitle}>{title}</h3>
               
                }/>
                <MyViewElement permit={permitView} element={
                      isAdmin&& premissionLists == '200' ? 
                      <MyAdminInput width={sizeInfo.descr.width} fetchInfo={{item: element, category: 'mainSimple', id: id}} id={id} height={sizeInfo.descr.height} typeAction={'DESCR_SIMPLE_ITEM_CHANGE'}>
                             <p className={cl.simpleItemDescr}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
                      </MyAdminInput>
                      :
                      <p className={cl.simpleItemDescr}>{descr}</p>
               
            }/>
            </li>
        
       
    )
}

export default MainSItem