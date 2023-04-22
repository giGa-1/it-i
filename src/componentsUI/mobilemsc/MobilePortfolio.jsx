import React, {useEffect, useState} from 'react';
import cl from '../../style/MobilePortfolio.module.css';

import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import Link from "next/link";
import MyViewElement from "../UI/viewelement/MyViewElement";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import { useSelector, useDispatch } from 'react-redux';

import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import Image from "next/image";
import { useMemo } from 'react';
const MobilePortfolio = ()=>{
    const infoData =    useSelector(state=>state.CrmPortfolio)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const portfolioTexts = useSelector(state=>state.AdminTexts.crmPortfolio)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const [activeChange, setActiveChange] = useState('')
  
    const [premissionGet, setPremissionGet] = useState(0) 
    const [premissionLists, setPremissionLists] = useState(0) 


  
        const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'portfolioTexts', 'AT',portfolioTexts)
        const changeState =  useChangeStateFirst( setPremissionLists,premissionLists, "-","/crmPortfolio",infoData, 'CRM_PORTFOLIO_CHANGE_STATE') 
 

    const [crmData, setCrmData] = useState({title: {width:0,height:0}, descr:{width:0,height:0}, textItem:{width:0,height:0} })
    const [isModal, setIsModal] = useState(false)
    return (
        <section className={cl.portSection}>
            <div className="container">
                <MyViewElement element={
                      isAdmin && premissionGet == '200' ? 
                      <MyAdminInput width={crmData.title.width} fetchInfo={{item: portfolioTexts,id: "portfolioTexts", category: 'adminTexts'}} height={crmData.title.height} typeAction={'TITLE_PORTFOLIO_CRM_PAGE_INFO'}>
                          <h2 className={cl.portTitle} onClick={e=>setCrmData({...crmData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{portfolioTexts.title}</h2>
                      </MyAdminInput>
                      :
                      <h2 className={cl.portTitle}>{portfolioTexts.title}</h2>
                }/>
                <MyViewElement element={
                      isAdmin && premissionGet == '200'  ? 
                      <MyAdminInput width={crmData.descr.width} fetchInfo={{item: portfolioTexts,id: "portfolioTexts", category: 'adminTexts'}} height={crmData.descr.height} typeAction={'DESCR_PORTFOLIO_CRM_PAGE_INFO'}>
                          <p className={cl.portDescr}  onClick={e=>setCrmData({...crmData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{portfolioTexts.descr}</p>
                      </MyAdminInput>
                      :
                      <p className={cl.portDescr}>{portfolioTexts.descr}</p>

                
                }/>
                    
               <div className={cl.portCardBlock}>
               {isAdmin?<MyAddElement typeAction={'ADD_CRM_PORTFOLIO_ELEMENT'}></MyAddElement>:''}
                {infoData.map(e=>
                    isAdmin && premissionGet == '200'  ? 
                    <MyViewElement element={
                        <div className={cl.adminBlockPortf}>
                            <div className={cl.adminModalBtn} onClick={event=>{setIsModal(true); setActiveChange(e)}} >ИЗМЕНИТЬ</div>
                            <MyDeleteElement typeAction={'DELETE_CRM_PORTFOLIO_ELEMENT'} id={e.id}></MyDeleteElement>

                                <figure className={cl.portFigure}>
                                    <Link href={e.href}>
                                        <div className={[cl.portBlock, e.classes].join` `}  onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})} style={{'backgroundColor': '#'+e.background}}>
                                            <Image width={512} height={604} src={e.img} />
                                        </div>
                                    </Link>
                                    {
                                        
                                         <MyAdminInput width={crmData.textItem.width}  fetchInfo={{item: e, category: 'crmPortfolio', id: e.id}}  id={e.id} height={crmData.textItem.height} typeAction={'DESCR_CRM_PORTFOLIO_CHANGE'}>
                                             <figcaption className={cl.portImgDescr}  onClick={e=>setCrmData({...crmData, textItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.descr}</figcaption>
                                         </MyAdminInput>
                                        
                                    }
                                   
                                </figure>
                           
                        </div>
                       
                    }/>
                    :
                    <MyViewElement element={
                        <Link href={e.href}>
                              <figure className={cl.portFigure} onClick={e=>document.body.scrollTo({top:0,behavior:'smooth'})}>
                                <div className={[cl.portBlock, e.classes].join` `} style={{'backgroundColor': '#'+e.background}}>
                                    <Image width={512} height={604} src={e.img} />
                                </div>
                                <figcaption className={cl.portImgDescr}>{e.descr}</figcaption>
                            </figure>
                        </Link>
                    }/>
                )}
                </div>
                <MyViewElement element={

                <div className={cl.portBtnBlock}>
                    <Link href='/keys'>
                        <a  className={cl.portLink}>
                        <MyBtnBlank classes={cl.portBtn} onClick={e=>{document.body.scrollTo({top:0,behavior:'smooth'})}}>ВСЕ КЕЙСЫ</MyBtnBlank>
                        </a>
                      
                    </Link>
                </div>
                }/>

            </div>
            {isAdmin?<MyAdminModal visible={isModal} setVisible={setIsModal} hrefValue={activeChange.href} colorValue={activeChange.background} imgValue={activeChange.img}  actionImg={'IMG_CRM_PORTFOLIO_CHANGE'} actionColor={'BACK_CRM_PORTFOLIO_CHANGE'} actionHref={'HREF_CRM_PORTFOLIO_CHANGE'} id={activeChange.id}></MyAdminModal>:''}
        </section>
    )
}

export default MobilePortfolio