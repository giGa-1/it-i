import React, {useMemo, useState, useCallback, useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import cl from '../../style/MainDev.module.css'
import { useDispatch, useSelector } from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import {useDropzone} from 'react-dropzone'
import MainDevItem from './MainDevItem';
import { getStartedInfo } from '../../untils/getStartedInfo';


const MainDev = (props) => {
    let spaceBetweenSwiper = 50;

    const dispatch = useDispatch()

    const {MainDevPage} = useSelector(state=>state)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const infoData = props.column === 'turnkeyWebsite' ? MainDevPage.turnkeyWebsite : props.column === 'developerCRM' ? MainDevPage.developerCRM : props.column === 'developerMobile' ? MainDevPage.developerMobile : ''
    
    const actionTitle =  props.column === 'turnkeyWebsite' ? 'MAINDEV_TITLE_CHANGE' : props.column === 'developerCRM' ? 'CRMDEV_TITLE_CHANGE' : props.column === 'developerMobile' ? 'MOBILEDEV_TITLE_CHANGE' : ''
    const actionDescr =  props.column === 'turnkeyWebsite' ? 'MAINDEV_DESCR_CHANGE' : props.column === 'developerCRM' ? 'CRMDEV_DESCR_CHANGE' : props.column === 'developerMobile' ?   'MOBILEDEV_DESCR_CHANGE' :''
    const actionAdd =  props.column === 'turnkeyWebsite' ? 'MAINDEV_ADD_ELEMENT' : props.column === 'developerCRM' ? 'CRMDEV_ADD_ELEMENT' : props.column === 'developerMobile' ?   'MOBILEDEV_ADD_ELEMENT' :''
    const actionDelete =  props.column === 'turnkeyWebsite' ? 'MAINDEV_DELETE_ELEMENT' : props.column === 'developerCRM' ? 'CRMDEV_DELETE_ELEMENT' : props.column === 'developerMobile' ?   'MOBILEDEV_DELETE_ELEMENT':''
    const actionImg =  props.column === 'turnkeyWebsite' ? 'MAINDEV_IMG_CHANGE' : props.column === 'developerCRM' ? 'CRMDEV_IMG_CHANGE' : props.column === 'developerMobile' ? 'MOBILEDEV_IMG_CHANGE' : ''
    
    

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainDev', 'AT',adminTexts.mainDev)


    const [premissionTariff, setPremissionTariff] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionTariff,premissionTariff, "-","/mainDev",infoData, 'CHANGE_STATE_DEV') 



    const [devInfo, setDevInfo] = useState({title: {width:0,height:0}, itemTitle: {width:0,height:0}, itemDescr: {width:0,height:0}})
    
    return (
        
        <section className={cl.MainDev}>
            <div className={["container", cl.container].join` `}>
                
                {isAdmin ? <MyAddElement typeAction={actionAdd}/>: ''}
                <div className={cl.titleWrapper}>
                    <MyViewElement element={
                        isAdmin  && premissionGet === '200' ? 
                            <MyAdminInput width={devInfo.title.width} fetchInfo={{item: adminTexts.mainDev, id: "mainDev", category: 'adminTexts'}} height={devInfo.title.height} typeAction={'TITLE_DEV_INFO'}>
                                <h1 className={cl.text} onClick={e=>setDevInfo({...devInfo, title: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}>{adminTexts.mainDev.title}</h1>
                            </MyAdminInput>
                            :
                            <h1 className={cl.text} onClick={e=>setDevInfo({...devInfo, title: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}>{adminTexts.mainDev.title}</h1>
                    }/>
                </div>
               
                
                <MyViewElement  element={
                    <Swiper
                    navigation={{
                        prevEl: '.arrPrev', nextEl: '.arrNext',
                    }}
                    pagination={{
                        el: '.pagination', renderBullet: function (index) {
                            return `<span class="dot swiper-pagination-bullet">${index}</span>`
                        }, type: 'fraction'
                    }}
                    spaceBetween={spaceBetweenSwiper}
                    autoHeight={true}
                    modules={[Navigation, Pagination]}
                    className={cl.mySwiper}>
                    <div className={cl.controlWrap}>
                        <div className={`arrPrev ${cl.arr}`}>
                            <span className={cl.arrowPrevGray}></span>
                        </div>
                        <div className={`pagination ${cl.pagination}`}>

                        </div>
                        <div className={`arrNext ${cl.arr}`}>
                            <span className={cl.arrowNextGray}></span>
                        </div>
                    </div>
                    {infoData.map((obj, i) =>    <SwiperSlide key={obj.id}  className={cl.Swiper}><MainDevItem premissionTariff={changeState} columnState={infoData} columnName={props.column} actionImg={actionImg} actionTitle={actionTitle} obj={obj} actionDescr={actionDescr} actionDelete={actionDelete} id={obj.id}/></SwiperSlide>)}
                </Swiper>
                }/>
                
            </div>

        </section>)

};


export default MainDev;
