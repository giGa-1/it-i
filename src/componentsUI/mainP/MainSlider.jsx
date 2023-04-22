import React, {useRef, useState} from 'react';
// import {Swiper, SwiperSlide} from "swiper/react";
import Swiper, {Autoplay, Navigation, Pagination} from "swiper";
// Import Swiper styles
import MyModal from '../UI/modal/MyModal';
// import required modules
import {useDispatch, useSelector} from 'react-redux'
import cl from '../../style/Slider.module.css';
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';
import MyThxModal from '../UI/thxmodal/MyThxModal';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';


const Slider = ({...props}) => {
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})
    const dispatch = useDispatch();
    const {mainSliderPage} = useSelector((state)=>state)
    const infoData = [...mainSliderPage]
    const {isAdmin} = useSelector(state=>state.AdminKey)
    const [heroInfo, setHeroInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}})


    let forServerInfo = {}

    const addModalInfo = (e) => {
        e.preventDefault();
        setModal(false);
        const newModal = {
            ...modalInfo, id: Date.now()
        }
        forServerInfo = {...newModal}
        setModalInfo({namePerson: '', tel: ''})
        console.log(forServerInfo);
        // postRequest(forServerInfo)
        // ContactsService.setPhoneNName(modalInfo.tel, modalInfo.namePerson)
    }

    const sliderI = useRef(false)



    const [modal, setModal] = useState(false)
    const [thxModal, setThxModal] = useState(false)


    React.useEffect(() => {
        new Swiper('.swiperSlider', {
            navigation: {
                prevEl: '.prevElSlider',
                nextEl: '.nextElSlider'
            },
                autoplay: {
                    delay: 2500,
                },
                speed: 600,
            autoHeight: true,
            slidesPerView: 1,
            spaceBetween: 10,

            modules: [Navigation, Pagination, Autoplay],
            pagination: {
                el: '.pagSlider'
            }
        })

    },[])
    return (
        <section className={cl.slider} >
            <div className={'swiper swiperSlider ' + cl.mySwiper}>


                <div className={'swiper-wrapper'}>
                        {
                            infoData.map((item, i) => (
                                <div className={'swiper-slide'} key={i}>

                                    <div className={['container ', cl.contentCont].join` `}>
                                        <div className={cl.wrapper}>
                                            <div className={cl.textBlock}>
                                                <div className={cl.textWrap}>
                                                    {isAdmin ?
                                                        <MyAdminInput width={heroInfo.title.width}  fetchInfo={{item: item, category: 'mainSlider', id: item.id}} id={item.id} height={heroInfo.title.height} typeAction={'TITLE_SLIDER_MAIN_CHANGE'}>
                                                            <div className={cl.heading}  onClick={e=>setHeroInfo({...heroInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{item.title}</div>
                                                        </MyAdminInput>
                                                    :
                                                        <div className={cl.heading}>{item.title}</div>
                                                    }
                                                     {isAdmin ?
                                                        <MyAdminInput width={heroInfo.descr.width} fetchInfo={{item: item, category: 'mainSlider', id: item.id}} id={item.id} height={heroInfo.descr.height} typeAction={'DESCR_SLIDER_MAIN_CHANGE'}>
                                                             <div className={cl.text} onClick={e=>setHeroInfo({...heroInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{item.botTitle}</div>
                                                        </MyAdminInput>
                                                    :
                                                        <div className={cl.text}>{item.botTitle}</div>
                                                    }

                                                    <MyBtnBlank classes={cl.btn} onClick={e => {
                                                        e.preventDefault(e);
                                                        setModal(true)
                                                    }}>получить консультацию</MyBtnBlank>
                                                </div>
                                            </div>
                                            <div className={cl.imgBlock}>
                                                <div className={cl.photoWraper}>
                                                    <div className={cl.photoWrap}>
                                                        <span className={[cl.photo, item.photo].join` `}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        ))}

                </div>
                <div className="swiper-pagination pagSlider"/>
                <div className="swiper-button-prev prevElSlider"/>
                <div className="swiper-button-next nextElSlider"/>
                <div className="swiper-scrollbar"/>

            </div>

            <MyModal visible={modal} id={'MainSlider'} setVisible={setModal} title='Получить консультацию' setThx={setThxModal}/>
            <MyThxModal visible={thxModal} setVisible={setThxModal}/>
        </section>

    );
};


export default Slider;
