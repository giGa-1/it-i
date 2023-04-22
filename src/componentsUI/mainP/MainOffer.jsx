import React, {useMemo, useState, useEffect} from 'react';
import cl from '../../style/MainOffer.module.css'
import MyBtnFiled from '../UI/buttonback/MyBtnFiled'
import MyMask from '../UI/maskinput/MyMask'
import MyInput from "../UI/input/MyInput";
import Ranger from "../UI/ranger/Ranger";
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';

import {Swiper, SwiperSlide} from "swiper/react";
import MyThxModal from '../UI/thxmodal/MyThxModal';
import {selectBtn} from "../../../redux/mainOffer-redux";
import {useDispatch, useSelector} from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useStepContext } from '@mui/material';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import { getStartedInfo } from '../../untils/getStartedInfo';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const MainOffer = (props) => {
    const [btnActive, setBtnActive] = useState('')
    const dispatch = useDispatch();
    const {mainOfferPage} =useSelector(state=>state)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const infoData = mainOfferPage.btns
    const [priceTo, setPriseTo] = useState(0)
    const [priceFrom, setPriseFrom] = useState(0)
    const [offerInfo, setOfferInfo] = useState({title: {width:0, height:0}, descr: {width:0,height:0}, titlePrice: {width:0,height:0}, descrPrice: {width:0,height:0}, titleContact: {width:0,height:0}, descrContact: {width:0,height:0}})
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: '', themeSite: '', range: {from: '', to: ''}})
    const [modal, setModal] = useState(false)

    let forServerInfo = {}

    useMemo(() => {
        setModalInfo((mf)=>({...mf, range: {from: priceFrom, to: priceTo}}))
    }, [priceTo, priceFrom])

    useMemo(() => {

        setModalInfo(()=>({...modalInfo, themeSite: btnActive}))
    }, [btnActive])
    useMemo(()=> {
        setBtnActive(() => infoData.filter(el=>el.selected).map(el => el.text))
    },[infoData])
    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(true);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo(()=>({namePerson: '', tel: '', range: {from: priceFrom, to: priceTo}, themeSite: ''}))
        console.log(modalInfo)
        // ContactsService.setPhonaNameBudget(forServerInfo.namePerson, forServerInfo.tel, forServerInfo.range.from, forServerInfo.range.to)
    }


    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainOffer', 'AT',adminTexts.mainOffer)

  

    return (
        <section className={cl.MainOffer}>
            <div className={["container", cl.container].join` `}>
                <div className={cl.wrapper}>
                    <span className={cl.mailRight}/>
                    <span className={cl.mailLeft}/>
                    <MyViewElement element={
                        isAdmin&& premissionGet === '200' ? 
                         <MyAdminInput width={offerInfo.title.width} fetchInfo={{item: adminTexts.mainOffer, id: "mainOffer", category: 'adminTexts'}} height={offerInfo.title.height} typeAction={'TITLE_OFFER_INFO'}>
                            <p className={cl.title} onClick={e=>setOfferInfo({...offerInfo, title: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOffer.title}</p>
                        </MyAdminInput>
                        :
                            <p className={cl.title}>{adminTexts.mainOffer.title}</p>                       
                    }/>
                    <MyViewElement element={
                         isAdmin&& premissionGet === '200' ? 
                         <MyAdminInput width={offerInfo.descr.width} fetchInfo={{item: adminTexts.mainOffer, id: "mainOffer", category: 'adminTexts'}} height={offerInfo.descr.height} typeAction={'DESCR_OFFER_INFO'}>
                            <p className={cl.titleText} onClick={e=>setOfferInfo({...offerInfo, descr: {width:e.target.offsetWidth,height:e.target.offsetHeight}})}>{adminTexts.mainOffer.descr}</p>
                        </MyAdminInput>
                        :
                        <p className={cl.titleText}>{adminTexts.mainOffer.descr}</p>
                    }/>
                    <MyViewElement element={
                        <div className={cl.btnsM}>
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={10}
                                className={cl.mySwiper}>

                                {infoData.map((el, i) => (
                                    <SwiperSlide className={cl.swipeSl} key={i}>
                                        <button className={el.selected ? `${cl.btn} ${cl.btnSelected}` : cl.btn}  my_key={i}
                                                onClick={e => {
                                                    dispatch(selectBtn(e.target.getAttribute('my_key')))
                                                    // e.preventDefault();
                                                }}>{el.textS}
                                        </button>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    }/>
                    <MyViewElement element={
                         <div className={cl.btns}>
                            {infoData.map((el, i) => (
                                <button className={el.selected ? `${cl.btn} ${cl.btnSelected}` : cl.btn} key={i} my_key={i}
                                        onClick={(e,i) => {
                                            dispatch(selectBtn(e.target.getAttribute('my_key')))
                                            // e.preventDefault();
                                        }}>{el.text}
                                </button>
                            ))}
                        </div>
                    }/>
                    
                   
                    <MyViewElement element={
                        <div className={cl.prices}>
                        {isAdmin && premissionGet === '200'?
                            <MyAdminInput width={offerInfo.titlePrice.width} height={offerInfo.titlePrice.height} typeAction={'TITLE_PRICE_OFFER_INFO'}>
                            <p className={cl.titlePrices} onClick={e=>setOfferInfo({...offerInfo, titlePrice: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOffer.titlePrice}</p>
                            </MyAdminInput>
                        :
                        <p className={cl.titlePrices}>{adminTexts.titlePrice}</p>
                        }
                        {isAdmin&& premissionGet === '200' ?
                            <MyAdminInput width={offerInfo.descrPrice.width} height={offerInfo.descrPrice.height} typeAction={'DESCR_PRICE_OFFER_INFO'}>
                            <p className={cl.titlePricesText} onClick={e=>setOfferInfo({...offerInfo, descrPrice: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOffer.descrPrice}</p>
                            </MyAdminInput>
                        :
                        <p className={cl.titlePricesText}>{adminTexts.descrPrice}</p>
                        }
                        <Ranger setTo={setPriseTo} priceTo={priceTo} priceFrom={priceFrom} setFrom={setPriseFrom}/>
                    </div>
                    }/>
                    

                    <div className={cl.contacts}>
                        <form id='offer' action="">
                            <MyViewElement element={
                                isAdmin&& premissionGet === '200' ?
                                <MyAdminInput width={offerInfo.titleContact.width} height={offerInfo.titleContact.height} typeAction={'TITLE_CONTACT_OFFER_INFO'}>
                                <p className={cl.titleContacts}  onClick={e=>setOfferInfo({...offerInfo, titleContact: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOffer.titleContact}</p>
                                </MyAdminInput>
                            :
                                <p className={cl.titleContacts}>{adminTexts.mainOffer.titleContact}</p>
                            }/>
                            <MyViewElement element={
                                <div className={cl.contactsBtn}>
                                    <div className={cl.itemBlock}>
                                        <MyInput classesInput={cl.input} valueInput={modalInfo.namePerson}
                                                setInput={setModalInfo} input={modalInfo} classesPlace={cl.modalPlace}
                                                place='Введите ваше имя'/>
                                    </div>
                                    <div className={cl.itemBlock}>
                                        <MyMask classesItem={[cl.input, cl.modalMask, cl.mask].join` `}
                                                value={modalInfo.tel}
                                                onChange={e => setModalInfo({...modalInfo, tel: e.target.value})}/>
                                    </div>
                                </div>
                            }/>
                            <MyViewElement element={
                                 isAdmin&& premissionGet === '200' ?
                                    <MyAdminInput width={offerInfo.descrContact.width} height={offerInfo.descrContact.height} typeAction={'DESCR_CONTACT_OFFER_INFO'}>
                                    <p className={cl.agreement}  onClick={e=>setOfferInfo({...offerInfo, descrContact: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOffer.descrContact}</p>
                                    </MyAdminInput>
                                :
                                <p className={cl.agreement}>{adminTexts.mainOffer.descrContact}</p>
                               
                                
                            }/>
                            <MyViewElement element={
                                <div className={cl.requestWrap}>
                                <MyBtnFiled type='submit' form='offer' children={'получить консультацию'}
                                            onClick={e => addModalInfo(e)}
                                            classes={cl.request}/>
                                <MyBtnBlank type='submit' form='offer' children={'получить консультацию'}
                                            onClick={e => addModalInfo(e)}
                                            classes={cl.requestM}/>
                            </div>
                            }/>
                            
                        </form>
                    </div>
                </div>
            </div>
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    );

};


export default MainOffer;