import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import cl from '../../style/KeysMainMobile.module.css';
import KeysItemList from '../KeysItemList';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const KeysMainMobile = ({classesTabs, setModalInfo, modalInfo, setModal, modal})=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const infoArr = useSelector(state=>state.KeysMobile)
    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/keysMobile",infoArr, 'MOBILE_CHANGE_STATE') 
  
    return (
        <div className={[cl.mobileBlock,classesTabs].join` `}>
             {isAdmin && 
            <div className={cl.adminBlock}><MyAddElement typeAction={'ADD_MOBILE_ELEMENT'}></MyAddElement></div>}

            <ul className={cl.mobileList}>
                {infoArr.map((e,i)=>
                    <KeysItemList keysPage='mobile' premissionLists={premissionLists} element={e} category={'keysMobile'} actionDelete={'DELETE_MOBILE_ELEMENT'} modal={modal} key={i} page={e.href} descr={e.descr} id={e.id} actionDescr={'DESCR_MOBILE_CHANGE'} setActiveItem={setModalInfo} activeItem={modalInfo} setModal={setModal} classesImg={e.img.classesImg} logo={e.img.logo} alt={e.img.alt} background={e.img.background} img={e.img.image}/>
                )}  
            </ul>
        </div>
    )
}

export default KeysMainMobile