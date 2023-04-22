import React, {useState, useEffect, useMemo} from "react";

import cl from '../../style/MobileService.module.css';
import MobileServItem from './MobileServItem';
import {Pagination, Swiper} from "swiper";

import { useSelector, useDispatch } from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const MobileService = ({column, actionTitle,stateName, actionListAdd, actionImg, actionListTitle, actionListDescr, actionListDelete, actionDescr}) => {
    const {mobileServicePage} = useSelector(state=>state)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const [mobileData, setMobileData] = useState({title: {width:0,height:0}, descr:{width:0,height:0}})
    const dispatch = useDispatch()
    const state = mobileServicePage[column]
    let checkin = 1
    useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 576

        function inititalSwiper() {
            if (swiper) return
            swiper = new Swiper(`.${column}`, {
                modules: [Pagination],
                slidesPerView: 'auto',
                speed: 400,
                spaceBetween: 20,
                pagination: {
                    el: `.pag${column}`,
                    type: 'bullets',
                },
            })
        }

        function destroySwiper() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;
                }
            } catch (err) {
                console.log('')
            }
        }

        function loadResize() {
            if (typeof window !== 'undefined') {
                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    inititalSwiper()
                } else {
                    destroySwiper()
                }
            }
        }
        if (typeof window !== 'undefined') {
            loadResize()
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
        }
    }, [])

  
  
    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/mobileService",mobileServicePage, 'CHANGE_STATE_SERVICES_PAGES') 

   




    return (
        <section className={cl.serviceSection}>
            <div className="container">
                {state.title ? <MyViewElement element={
                    isAdmin && premissionLists=='200' ? 
                    <MyAdminInput width={mobileData.title.width} fetchInfo={{item: state,id: column, category: 'adminTexts'}} height={mobileData.title.height} typeAction={actionTitle}>
                        <h2 className={cl.serviceTitle} onClick={e=>setMobileData({...mobileData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.title}</h2>
                    </MyAdminInput>
                    :
                    <h2 className={cl.serviceTitle}>{state.title}</h2>
                   
                }/> : ''}
                {state.text ?  <MyViewElement element={
                    isAdmin && premissionLists=='200' ? 
                    <MyAdminInput width={mobileData.descr.width} fetchInfo={{item: state,id: column, category: 'adminTexts'}} height={mobileData.descr.height} typeAction={actionDescr}>
                        <p className={cl.serviceDescr} onClick={e=>setMobileData({...mobileData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.text}</p>
                    </MyAdminInput>
                    :
                    <p className={cl.serviceDescr}>{state.text}</p>
                   
                }/> : ''}
                {isAdmin?
                <div className={cl.adminKey}>
                      <MyAddElement typeAction={actionListAdd}/>
                </div>
                :
                ''}
                <div className={cl.serviceListBlock}>
                    <div className={`swiper ${column}`}>
                        <div className={'swiper-wrapper ' + cl.serviceList}>
                          
                            {state.cases.map((e, i) => <div className={'swiper-slide ' + cl.swiperSl} key={i}>
                                <MobileServItem premissionLists={premissionLists} title={e.title} element={e} id={e.id} descr={e.descr} img={e.img} actionListTitle={actionListTitle} actionImg={actionImg} actionListDelete={actionListDelete} actionListDescr={actionListDescr}/>
                            </div>)}
                        </div>
                        <div className="swiper-scrollbar"></div>
                        <div className={`pag${column}` + ' ' + cl.pag} ></div>
                    </div>
                </div>
            </div>
        </section>
    )
    }
export default MobileService