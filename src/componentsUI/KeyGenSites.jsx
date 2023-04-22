import React, {useEffect, useRef, useState} from 'react';

import cl from '../style/keySite.module.css'
import {NavLink} from "react-router-dom";
import MainApplication from "./mainP/MainApplication";
import miniPhone from '../../public/img/miniPhone.WebP'
import MyModal from "./UI/modal/MyModal";
import MyThxModal from "./UI/thxmodal/MyThxModal";
import MyBtnBlank from "./UI/buttonborder/MyBtnBlank";
import NavPagesHead from './UI/navpage/MyNavPages';
import MyAdminInput from "./UI/admininput/MyAdminInput";
import MyAddElement from './UI/adminaddel/MyAddElement';
import MyDeleteElement from './UI/admindelel/MyDeleteElement';
import { useDispatch,useSelector } from 'react-redux';
import { useChangeStateFirst } from '../hooks/useChangeStateFirst';

import Image from "next/image";
import KeyGenSitesItem from './KeyGenSitesItem';

const KeyGenSites = ({link}) => {
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    // let [state] = props.KeySitePage.filter(el => el.href === props.match.path)
    const dispatch = useDispatch();
    const {KeySitePage} = useSelector(state=>state)
   console.log(link, KeySitePage)
    const [state] = KeySitePage.filter(e=>e.href==link)
 

   
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)

    const [premission, setPremission] = useState(0) 
    const changeState = useChangeStateFirst( setPremission,premission, "-","/genericPages",KeySitePage, 'CHANGE_ALL_STATE') 
    const [modalInfo, setModalInfo] = useState({descrAchor:'',descr:'', achorSite:'', aboutCompany: '', task: '', link: ''})

    const replacerComments = (str, find, replace)=>{
        let parts = str.split(find);
        let res = []
        for(let i = 0, result = []; i < parts.length; i++) {
            result.push(parts[i]);
            result.push(replace);
            res = result
        }
        return (
            <>{res}</>
        );
    }


   console.log(state)
  
    const infoPage = [{text: 'Кейсы', link: '/keys'}, {text: state.descrAchor}]
    return (
        <div className={[cl.KeySite, ].join` `} >
                <NavPagesHead action={'CHANGE_TITLE_GEN_KEYS'} id={state.id} premission={premission} navItems={infoPage}/>
            <div className={cl.container}>
                {
                    isAdmin && premission === '200' ? 
                    <MyAdminInput width={modalInfo.descr.width} btnsDirection={0} id={state.id} height={modalInfo.descr.height} typeAction={'CHANGE_DESCR_GEN_KEYS'}>
                          <div className={cl.descr} onClick={e=>{e.preventDefault();setModalInfo({...modalInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{state.descr}</div>
                      
                    </MyAdminInput>
                    :
                    <div className={cl.descr}>{replacerComments(state.descr, '_', < br/>)}</div>
                }
               
                <div className={cl.achorSite}>{ state.achorSite ? 
                    isAdmin && premission === '200' ? 
                    <MyAdminInput width={modalInfo.link.width} id={state.id} height={modalInfo.link.height} typeAction={'CHANGE_ABOUT_DESCR_GEN_KEYS'}>
                         <a href={`https://${state.achorSite}`} target='_blank' className={cl.hrefSite} onClick={e=>{e.preventDefault();setModalInfo({...modalInfo, link: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}}>{state.achorSite}</a> 
                    </MyAdminInput>
                    :
                    <a href={`https://${state.achorSite}`} target='_blank' className={cl.hrefSite} >{state.achorSite}</a> 
                   
                
                : ''}</div>
                <div className={cl.about}>
                    <div className={cl.aboutCompany}>
                        <div className={cl.title}>О компании</div>
                        {isAdmin && premission === '200' ? 
                          <MyAdminInput width={modalInfo.aboutCompany.width} id={state.id} height={modalInfo.aboutCompany.height} typeAction={'CHANGE_ABOUT_DESCR_GEN_KEYS'}>
                               <div className={cl.text} onClick={e=>setModalInfo({...modalInfo, aboutCompany: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.aboutCompany}</div>
                          </MyAdminInput>
                          :
                          <div className={cl.text}>{ replacerComments(state.aboutCompany, '_', < br/>)}</div>}
                       
                    </div>
                    <div className={cl.task}>
                        <div className={cl.title}>Задача</div>
                        {isAdmin && premission === '200' ? 
                          <MyAdminInput width={modalInfo.task.width} id={state.id} height={modalInfo.task.height} typeAction={'CHANGE_TASK_GEN_KEYS'}>
                               <div className={cl.text} onClick={e=>setModalInfo({...modalInfo, task: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.task}</div>
                          </MyAdminInput>
                          :
                          <div className={cl.text}>{state.task}</div>}
                        
                    </div>
                </div>

            </div>


            {state.imageInfo.map((el, i) => (
                <KeyGenSitesItem premission={premission} id={state.id} infoObj={el}></KeyGenSitesItem>
            ))
            }

            <div className={cl.publicity}>
                <div className={cl.wrapMiniPhone}>
                    <svg className={cl.miniPhone} width="30" height="42" viewBox="0 0 30 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8105 8.82038C10.8105 7.67803 11.7366 6.75195 12.879 6.75195H17.0158C18.1582 6.75195 19.0843 7.67803 19.0843 8.82038C19.0843 9.96273 18.1582 10.8888 17.0158 10.8888H12.879C11.7366 10.8888 10.8105 9.96273 10.8105 8.82038Z" fill="#F84263"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.46875 6.75216C0.46875 3.32509 3.24696 0.546875 6.67404 0.546875H23.2215C26.6487 0.546875 29.4268 3.32509 29.4268 6.75216V35.7102C29.4268 39.1374 26.6487 41.9155 23.2215 41.9155H6.67404C3.24696 41.9155 0.46875 39.1374 0.46875 35.7102V6.75216ZM4.60561 31.5733V6.75216C4.60561 5.60981 5.53169 4.68373 6.67404 4.68373H23.2215C24.3639 4.68373 25.2899 5.60981 25.2899 6.75216V31.5733H4.60561ZM25.2899 35.7102H4.60561C4.60561 36.8526 5.53169 37.7786 6.67404 37.7786H23.2215C24.3639 37.7786 25.2899 36.8526 25.2899 35.7102Z" fill="#F84263"/>
                    </svg>

                </div>
                <div className={cl.titlePubl}>Понравилось? Закажите подобное решение</div>
                <div className={cl.textPubl}>Мы свяжемся с вами, ответим на интересующие вопросы и подготовим
                    коммерческое предложение
                </div>
                <div className={cl.tel}>+7 (925) 117-00-46</div>
                <MyBtnBlank classes={cl.btn} onClick={e => {
                    e.preventDefault(e);
                    setModal(true)
                }}>получить консультацию</MyBtnBlank>
            </div>
                <MyModal visible={modal} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
                <MyThxModal visible={thxModal} setVisible={setThxModal}/>


            <MainApplication/>
        </div>
    );
};

export default KeyGenSites;