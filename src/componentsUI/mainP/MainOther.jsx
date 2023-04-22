import React, {useState, useEffect, useMemo} from "react";
import cl from '../../style/MainOther.module.css';
import MyBtnFiled from "../UI/buttonback/MyBtnFiled";
import MyModal from "../UI/modal/MyModal";
import MyMask from "../UI/maskinput/MyMask";
import MyInput from "../UI/input/MyInput";
import MainOItem from "./MainOItem";
import ContactsService from "../../API/ContactsService";
import { useSelector } from "react-redux";
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper from "swiper";

import {useDropzone} from 'react-dropzone'
import { useDispatch } from "react-redux";
import MainTItem from "./MainTItem";
import {Pagination} from "swiper";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import { getStartedInfo } from '../../untils/getStartedInfo';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const MainOther = () => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const otherData = useSelector(state=>state.MainOther)
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})
    const [otherInfo, setOtherInfo] = useState({titleLeft: {width:0, height:0}, titleRight: {width:0, height:0}, descr: {width:0, height: 0}})
    let forServerInfo = {}



    const addModalInfoItem = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.tel)
    }


    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)

    const [modalItem, setModalItem] = useState(false)

    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = 576;

        function catalogSliderInit() {
            if (!swiper) {
                swiper = new Swiper('.swiperM', {
                    modules: [Pagination],
                    slidesPerView: "auto",
                    speed: 400,
                    // spaceBetween: 10,
                    // autoHeight: true
                }, []);
            }
        }

        function catalogSliderDestroy() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;

                }
            } catch (err) {}
        }

        function loadResize() {
            if (typeof window !== 'undefined') {

                let windowWidth = window.innerWidth

                if (windowWidth <= mediaQuerySize) {
                    catalogSliderInit()
                } else {
                    catalogSliderDestroy()
                }
            }

        }
        if (typeof window !== 'undefined') {
            loadResize()
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
        }
    }, []);




    const dispatch = useDispatch()



    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainOther', 'AT',adminTexts.mainOther)

    const [premissionTariff, setPremissionTariff] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionTariff,premissionTariff, "-","/mainOther",otherData, 'OTHER_CHANGE_STATE') 



    return (
        <section className={cl.other}>
            <div className={cl.allOtherContent}>
                <div className={cl.overlay}/>
                <div className={[cl.container].join` `}>
                    <div className={cl.otherContent}>
                       
                  
                        <MyViewElement element={
                            isAdmin && changeStateTexts == '200' ? 
                                    <h2 className={cl.otherTitle} >
                                        <MyAdminInput width={otherInfo.titleLeft.width} fetchInfo={{item: adminTexts.mainOther, id: "mainOther", category: 'adminTexts'}} height={otherInfo.titleLeft.height} typeAction={'TITLE_LEFT_OTHER_INFO'}>
                                            <span className={cl.otherTitleFirst} onClick={e=>setOtherInfo({...otherInfo, titleLeft: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOther.titleLeft}</span>
                                        </MyAdminInput>
                                        <MyAdminInput width={otherInfo.titleRight.width} fetchInfo={{item: adminTexts.mainOther, id: "mainOther", category: 'adminTexts'}} height={otherInfo.titleRight.height} typeAction={'TITLE_RIGHT_OTHER_INFO'}>
                                            <span className={cl.otherTitleItem} onClick={e=>setOtherInfo({...otherInfo, titleRight: {width: e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainOther.titleRight}</span>
                                        </MyAdminInput>
                                        
                                    </h2>
                               
                            :
                                <h2 className={cl.otherTitle}> <span className={cl.otherTitleFirst}>{adminTexts.mainOther.titleLeft}</span><span className={cl.otherTitleItem}>{adminTexts.mainOther.titleRight}</span></h2>
                            
                             
                        }/>
                          {isAdmin ? 
                            <div className={cl.adminBlock}>
                                <MyAddElement typeAction={'OTHER_ADD_ITEM'}/>
                            </div> 
                            : ''}
                       <MyViewElement element={
                        <div className={cl.otherListBlock}>
                            <div className={'swiper swiperM '}>

                               
                                <div className={'swiper-wrapper ' + cl.otherList}>
                                    {otherData.map((e, i) =>
                                        <div className={'swiper-slide ' + cl.swipeSl} key={i}>
                                            <MainOItem premissionTariff={changeState} title={e.title} element={e} id={e.id} img={e.img} setModalItem={setModalItem}
                                                       key={e.title}/>
                                        </div>
                                    )}

                                </div>
                            </div>
                            {/*<ul className={cl.otherList}>*/}
                            {/*    {infoItem.map(e => */}
                            {/*        <MainOItem title={e.title} img={e.img} setModalItem={setModalItem} key={e.title}/> */}
                            {/*    )}*/}
                            {/*</ul>*/}
                            {/*<Swiper*/}
                            {/*    slidesPerView={"auto"}*/}
                            {/*    // spaceBetween={11}*/}
                            {/*    autoHeight ={true}*/}
                            {/*    className={cl.mySwiper}>*/}
                            {/*    <ul>*/}
                            {/*        {infoItem.map(e =>(*/}
                            {/*            <SwiperSlide className={cl.swipeSl}>*/}

                            {/*            <MainOItem title={e.title} img={e.img} setModalItem={setModalItem} key={e.title}/>*/}
                            {/*            </SwiperSlide>*/}
                            {/*            )*/}
                            {/*        )}*/}
                            {/*    </ul>*/}
                            {/*</Swiper>*/}
                        </div>
                         }/>
                          <MyViewElement element={
                        <div className={cl.btnCont}>
                            <MyBtnFiled classes={cl.otherBtn} onClick={e => {
                                e.preventDefault(e);
                                setModal(true)
                            }}>нужна консультация</MyBtnFiled>
                        </div>
                        }/>
                    </div>
                </div>
            </div>

            <MyModal visible={modal} setVisible={setModal} id={'MainOther'} title='Получить консультацию' setThx={setThxModal}/>
            <MyModal visible={modalItem} setVisible={setModalItem} id={'MainOther'} title='Оставить заявку' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </section>
    )
}

export default MainOther