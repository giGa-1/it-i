import React, {useState, useEffect, useMemo} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import arrPrevRev from '../../../public/img/arrPrevRev.svg'
// import arrNextRev from '../../../public/img/arrNextRev.svg'
import cl from '../../style/MainReview.module.css'
import MyViewElement from '../UI/viewelement/MyViewElement';
import { useSelector } from 'react-redux';
import MyAdminInput from "../UI/admininput/MyAdminInput";
import MyAddElement from '../UI/adminaddel/MyAddElement';
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import {useDropzone} from 'react-dropzone'
import MainReviewItem from './MainReviewItem';
import Image from "next/image";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';
import MyFormData from '../../untils/ImgFetch';



const MainReview = () => {
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const adminTexts = useSelector(state=>state.AdminTexts)
    const reviewTexts = useSelector(state=>state.AdminTexts.mainReview)
    const [sizeInfo, setSizeInfo] = useState({title: {width:0,height:0}, name: {width:0,height:0}, position: {width:0,height:0}, descr: {width:0,height:0}})
    const [modalInfo, setModalInfo] = useState({id: ''})
    const [isModal, setIsModal] = useState(false)
    const dispatch = useDispatch()



    let state = useSelector(state=>state.MainReview)

  

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




    const [premissionGet, setPremissionGet] = useState(0) 
    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/mainReview",reviewTexts, 'REVIEW_MAIN_CHANGE_STATE') 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainReview', 'AT',reviewTexts)

   



    // fetchInfo={{item: adminTexts, category: 'adminTexts'}}
    return (
        <section className={cl.MainReview}>
            <MyViewElement element={
                 isAdmin  && premissionGet === '200' ?
                 <MyAdminInput  width={sizeInfo.title.width}    fetchInfo={{item: adminTexts.mainReview,id: "mainReview", category: 'adminTexts'}} height={sizeInfo.title.height} typeAction={'TITLE_REVIEW_INFO'}>
                     <h2 className={cl.title}  onClick={e=>setSizeInfo({...sizeInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{reviewTexts.title}</h2>
                 </MyAdminInput>
                 :
                 <h2 className={cl.title}>{reviewTexts.title}</h2>
                
            }/>
            <MyViewElement element={
                <div className={cl.container}>
                    {isAdmin?<MyAddElement typeAction={'ADD_REVIEW_MAIN_ELEMENT'}></MyAddElement>:''}
                <div className={`arrPrevRev ${cl.arrPrevWrap}`}>
                    <span className={cl.arrPrev}></span>
                </div>

                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.arrPrevRev',
                        nextEl: '.arrNextRev',
                        disabledClass: cl.disabledMainRew
                    }}
                    pagination={{
                        el: '.paginationRev',
                    }}
                    className={cl.mySwiper}
                    modules={[Navigation, Pagination]}>
                    {state.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <MainReviewItem premissionLists={premissionLists} infoObj={obj}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`arrNextRev ${cl.arrNextWrap}`}>
                    <span className={cl.arrNext}></span>
                </div>
            </div>
            }/>
             <MyViewElement element={
            <div className={cl.containerM}>
                <Swiper
                    navigation={{
                        prevEl: '.arrPrevRev',
                        nextEl: '.arrNextRev',
                        disabledClass: cl.disabledMainRew
                    }}
                    autoHeight={true}
                    modules={[Navigation, Pagination]}>
                    {state.map((obj, i) => (
                        <SwiperSlide key={i}>
                            <div className={cl.wrapper}>
                                <span className={cl.changeItem} onClick={e=>{setModalInfo(obj.id);setIsModal(true)}}>ИЗМЕНИТЬ</span>
                                <div className={cl.wrapperPhotoPerson}>
                                    <div className={cl.photoBlock}>
                                        <Image  width={107} height={107} src={`/img/${obj.photo}`} alt="photo" className={cl.photo}/>
                                        {
                                             isAdmin && premissionLists == '200' ? 
                                             <MyAdminInput width={sizeInfo.name.width} id={obj.id} height={sizeInfo.name.height} typeAction={'INITIALS_REVIEW_MAIN_CHANGE'}>
                                                 <p className={cl.name} onClick={e=>setSizeInfo({...sizeInfo, name: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{obj.name}</p>
                                             </MyAdminInput>
                                             :
                                             <p className={cl.name}>{obj.name}</p>
                                        }
                                      
                                    </div>
                                        {
                                            isAdmin&& premissionLists == '200' ? 
                                            <MyAdminInput width={sizeInfo.position.width} id={obj.id} height={sizeInfo.position.height} typeAction={'POSITION_REVIEW_MAIN_CHANGE'}>
                                                <p className={cl.position}  onClick={e=>setSizeInfo({...sizeInfo, position: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{obj.position}</p>
                                            </MyAdminInput>
                                            :
                                            <p className={cl.position}>{obj.position}</p>
                                        }
                                   
                                </div>
                                {
                                    isAdmin&& premissionLists == '200' ? 
                                    <MyAdminInput width={sizeInfo.descr.width} id={obj.id} height={sizeInfo.descr.height} typeAction={'COMMENT_REVIEW_MAIN_CHANGE'}>
                                        <div className={cl.comment}  onClick={e=>setSizeInfo({...sizeInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{obj.comment}</div>
                                    </MyAdminInput>
                                    :
                                    <div className={cl.comment}>{replacerComments(obj.comment, '_', < br/>)}</div>
                                }
                               
                            </div>
                        </SwiperSlide>
                     ))}
                </Swiper>
                <div className={cl.arrBlock}>
                    <div className={`arrPrevRev ${cl.arrPrevWrap}`}>
                        <span className={cl.arrPrev}></span>
                    </div>
                    <div className={`arrNextRev ${cl.arrNextWrap}`}>
                        <span className={cl.arrNext}></span>
                    </div>
                </div>
            </div>
             }/>
            <div className={`paginationRev ${cl.pagination}`}> </div>
        </section>
    );
};

export default MainReview;