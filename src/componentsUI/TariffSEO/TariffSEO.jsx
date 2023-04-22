import React, {useState} from 'react';
import cl from '../../style/tariffSEO.module.css'
import {Swiper, Pagination} from "swiper";
import MyModal from "../UI/modal/MyModal";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import {useDispatch, useSelector} from 'react-redux';
import MyViewElement from '../UI/viewelement/MyViewElement';

import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyBtnFiled from '../UI/buttonback/MyBtnFiled';
import { useEventCallback } from '@mui/material';
import TariffSEOitem from './TariffSEOitem';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const TariffSeo = ({column}) => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, text: {width:0,height:0},titleItem:{width:0,height:0},price:{width:0,height:0},listItem:{width:0,height:0}, titleText: {width:0,height:0}, listText: {width:0,height:0}})
    let nameSwiper = column// + ~~(Math.random() * 100)
    const {tarrifSEOPage} = useSelector(state => state)
    let swiperWrapper = React.createRef(false), pag = React.createRef(false), state = tarrifSEOPage.find(e=>e.id == column)
    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)
    const [activeItem,setActiveItem] = useState('')
   
    const [premission, setPremission] = useState(0) 

    const changeState =  useChangeStateFirst(setPremission,premission, "-","/tariffSeo",tarrifSEOPage, 'SEO_TARIFF_CHANGE_STATE')
    React.useEffect(() => {
        let swiper = null;
        let mediaQuerySize = null
        let checkin = 1;

        function inititalSwiper() {

            if (!!pag.current) {
                pag.current.style.display = 'block'
                swiperWrapper.current.style.justifyContent = 'flex-start'
            }
            if (swiper) return
            swiper = new Swiper(`.${nameSwiper}`, {
                modules: [Pagination],
                slidesPerView: 'auto',
                speed: 400,
                spaceBetween: 10,
                pagination: {
                    el: `.${nameSwiper + 'pag'}`, type: 'bullets',

                }
            })
        }

        function destroySwiper() {
            try {
                if (swiper) {
                    swiper.destroy();
                    swiper = null;
                }
                swiperWrapper.current.style.justifyContent = 'center'
                pag.current.style.display = 'none'
            } catch (err) {
                console.log('')
            }
        }

        function loadResize() {
            if (typeof window !== 'undefined') {
                mediaQuerySize = state.cases.length * 400;
                let windowWidth = window.innerWidth
                if (windowWidth <= mediaQuerySize) {
                    try {
                        if (pag.current !== null && pag.current !== undefined) {
                            pag.current.style.display = 'block'
                            swiperWrapper.current.style.justifyContent = 'flex-start'
                        }
                    } catch (e) {
                    }
                    inititalSwiper()
                } else {
                    try {

                        if (pag.current !== null && pag.current !== undefined) {
                            swiperWrapper.current.style.justifyContent = 'center'
                            pag.current.style.display = 'none'
                        }
                    } catch (e) {
                    }
                    destroySwiper()
                }
            }
        }

            if (checkin) {
                loadResize()
                checkin = 0
            }
            window.addEventListener('load', loadResize);
            window.addEventListener('resize', loadResize);
    })
    
    return (<div className={cl.tariffSEO}>
            <div className="container">

                <div className={cl.column1}>
                    {state.title ?  <MyViewElement element={
                          isAdmin && premission == '200' ? 
                          <MyAdminInput width={sizeInfo.title.width}   fetchInfo={{item: state, category: 'tariffSEO', id: column}} id={column} height={sizeInfo.title.height} typeAction={'TITLE_TARIFF_SEO_CHANGE'}>
                               <div className={cl.title}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.title}</div>
                          </MyAdminInput>
                          :
                          <div className={cl.title}>{state.title}</div>
                       
                    }/> : ''}
                    {state.text ? <MyViewElement element={
                          isAdmin && premission == '200' ? 
                          <MyAdminInput width={sizeInfo.text.width } fetchInfo={{item: state, category: 'tariffSEO', id: column}} id={column} height={sizeInfo.text.height} typeAction={'TEXT_TARIFF_SEO_CHANGE'}>
                               <div className={cl.text}  onClick={e=>setSizeInfo({...sizeInfo, text: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.text}</div>
                          </MyAdminInput>
                          :
                          <div className={cl.text}>{state.text}</div>
                       
                    }/> : ''}
                    {state.titleText ? <MyViewElement element={
                          isAdmin && premission == '200' ? 
                          <MyAdminInput width={sizeInfo.titleText.width } fetchInfo={{item: state, category: 'tariffSEO', id: column}} id={column} height={sizeInfo.titleText.height} typeAction={'TITLE_TEXT_TARIFF_SEO_CHANGE'}>
                              <div className={cl.titleText} onClick={e=>setSizeInfo({...sizeInfo, titleText: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{state.titleText}</div>
                          </MyAdminInput>
                          :
                          <div className={cl.titleText}>{state.titleText}</div>
                        
                    }/> : ''}

                </div>
            </div>
            <MyViewElement element={

          
            <div className={"swiper " + nameSwiper + ' ' + cl.swiper}>
                <div className={"swiper-wrapper " + ' container ' + cl.wrapperSlid} ref={swiperWrapper}>
                    {state.cases.map((el, i) => <TariffSEOitem setActiveItem={setActiveItem} premission={premission} setModal={setModal} element={el} stateFetch={state} column={column} indexItem={i} sizeInfo={sizeInfo} setSizeInfo={setSizeInfo} infoItem={el}/>)}
                </div>
                <div className="swiper-scrollbar"/>
                <div className={cl.pag + ' ' + nameSwiper + 'pag'} ref={pag}/>
            </div>
              }/>

            <MyModal visible={modal} id={'TariffSeo'} infoObj={{activeItem}} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </div>

    );
};

export default TariffSeo;