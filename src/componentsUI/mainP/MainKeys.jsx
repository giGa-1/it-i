import React, {useState,useEffect,useMemo } from 'react';
import cl from '../../style/MainKeys.module.css';
import MainKItem from './MainKItem';
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import { getStartedInfo } from '../../untils/getStartedInfo';
import Link from 'next/link';
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from '../UI/adminaddel/MyAddElement';

const MainKeys = () => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts =  useSelector(state=>state.AdminTexts)
    const keysTexts = useSelector(state=>state.AdminTexts.mainKeys)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})
    const itemInfo = useSelector(state=>state.MainKeys)
    const [modalInfo, setModalInfo] = useState({href:'',color:'', alt:'', id: '', count: ''})
    const [isModal, setIsModal] = useState(false)
    const dispatch = useDispatch()

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainKeys', 'AT',keysTexts)

   
    const [premissionTariff, setPremissionTariff] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionTariff,premissionTariff, "-","/mainKeys",itemInfo, 'MAIN_KEYS_CHANGE_STATE') 

    return (
        <section className={cl.keys}>
            <div className="container">
                <div className={cl.keysContent}>
                    <MyViewElement element={
                          isAdmin && premissionGet === '200' ? 
                          <MyAdminInput width={sizeInfo.title.width} fetchInfo={{item: keysTexts, id: "mainKeys", category: 'adminTexts'}} height={sizeInfo.title.height} typeAction={'TITLE_KEYS_MAIN_INFO'}>
                              <h2 className={cl.keysTitle}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{keysTexts.title}</h2>
                          </MyAdminInput>
                          :
                          <h2 className={cl.keysTitle}>{keysTexts.title}</h2>
                        
                    }/>
                     <MyViewElement element={
                          isAdmin && premissionGet === '200' ? 
                          <MyAdminInput width={sizeInfo.descr.width} fetchInfo={{item: keysTexts, id: "mainKeys", category: 'adminTexts'}} height={sizeInfo.descr.height} typeAction={'DESCR_KEYS_MAIN_INFO'}>
                              <p className={cl.keysDescr}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{keysTexts.descr}</p>
                          </MyAdminInput>
                          :
                          <p className={cl.keysDescr}>{keysTexts.descr}</p>
                    
                    }/>
                    <div className={cl.keysListBlock}>
                        {isAdmin?<MyAddElement typeAction={'ADD_KEYS_MAIN_ITEM_ELEMENT'}></MyAddElement>:''}
                        <ul className={cl.keysList}>
                            {itemInfo.map((e, i) =>
                                <MainKItem premissionTariff={premissionTariff} setModal={setIsModal} element={e} modalInfo={modalInfo} modalInfoChanging={setModalInfo} count={e.count} id={e.id} infoArr={e.info} key={i}/>
                            )}
                        </ul>
                    </div>
                    <MyViewElement element={
                    <Link href='/keys'>
                        <a onClick={e => {document.body.scrollTo({top: 0, behavior: 'smooth'})}}> 
                            <MyBtnBlank classes={cl.keysBtn}>все кейсы</MyBtnBlank>
                        </a>
                    </Link>
                    }/>
                </div>
            </div>
            {isAdmin &&  premissionTariff == '200' ? 
                <MyAdminModal visible={isModal} keysIdintificator={true} setVisible={setIsModal} colorValue={modalInfo.color} hrefValue={modalInfo.href} altValue={modalInfo.alt} imgValue={1} id={modalInfo.id} count={modalInfo.count} actionHref={'HREF_KEYS_MAIN_ITEM_ELEMENT'} actionImg={'IMG_KEYS_MAIN_ITEM_ELEMENT'} actionAlt={'ALT_KEYS_MAIN_ITEM_ELEMENT'} actionColor={'COLOR_KEYS_MAIN_ITEM_ELEMENT'}></MyAdminModal>
            :''}
        </section>
    )
}

export default MainKeys