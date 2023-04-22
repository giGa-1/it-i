import React, {useState} from 'react';
import cl from '../../style/KeysMainCrm.module.css';
import KeysItemList from '../KeysItemList';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';


const KeysMainCrm = ({classesTabs, setModalInfo, modalInfo, setModal, modal}) => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    const infoArr = useSelector(state=>state.KeysCrm)

    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/keysCrm",infoArr, 'CHANGE_ALL_KEYS_CRM') 
    console.log(infoArr)
    const scrollTopPage = (e)=>{
        document.body.scrollTo({top:0,behavior:'smooth'});
    }
    return (
       
            <div className={[cl.crmBlock, classesTabs].join` `}>
                {isAdmin && 
            <div className={cl.adminBlock}><MyAddElement typeAction={'ADD_CRM_KEYS_ELEMENT'}></MyAddElement></div>}
                <ul className={cl.crmList}>
                    {infoArr.map((e, i) => 
                        <KeysItemList keysPage='crm'  premissionLists={premissionLists} actionDelete={'DELETE_CRM_KEYS_ELEMENT'} element={e} category={'KeysCrm'} modal={modal} key={i} page={e.href} descr={e.descr} id={e.id} actionDescr={'DESCR_CRM_KEYS_CHANGE'} setActiveItem={setModalInfo} activeItem={modalInfo} setModal={setModal} classesImg={e.img.classesImg} logo={e.img.logo} alt={e.img.alt} background={e.img.background} img={e.img.image}/>
                    )}
                   
                </ul>
            </div>
       
    )
}

export default KeysMainCrm