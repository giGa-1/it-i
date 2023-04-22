import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import cl from '../../style/KeysMainSites.module.css';
import KeysItemList from '../KeysItemList';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import MyAdminModal from '../UI/adminmodal/MyAdminModal';
const KeysMainSites = ({classesTabs, setModalInfo, modalInfo, setModal, modal})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const infoArr = useSelector(state=>state.KeySitesPage)
    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/keysSites",infoArr, 'SITES_KEYS_CHANGE_STATE') 
  
    console.log(infoArr)
    return (
       <div className={[cl.keysSitesBlock, classesTabs].join` `}>
            {isAdmin && 
            <div className={cl.adminBlock}><MyAddElement typeAction={'ADD_SITES_ELEMENT'}></MyAddElement></div>}
           <ul className={cl.keysSitesLisst}>
                {infoArr.map((e,i)=>
                    <KeysItemList element={e} premissionLists={premissionLists} category={'KeySitesPage'} modal={modal} key={i} logoClasses={e.imageInfo.logoClasses} page={e.href} descr={e.descr} id={e.id} setActiveItem={setModalInfo} actionDescr={'DESCR_SITES_CHANGE'} activeItem={modalInfo} setModal={setModal} classesImg={e.imageInfo.classesImg} logo={e.imageInfo.logo} alt={e.imageInfo.alt} background={e.imageInfo.background} img={e.imageInfo.img}/>
                )}   
            </ul>
            
       </div>
    )
}
export default KeysMainSites