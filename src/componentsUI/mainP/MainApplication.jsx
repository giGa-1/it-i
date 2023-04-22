import React, {useState, useEffect, useMemo} from "react";
import cl from '../../style/MainApplication.module.css';
import MyBtnBlank from "../UI/buttonborder/MyBtnBlank";
import MyMask from "../UI/maskinput/MyMask";
import MyInput from "../UI/input/MyInput";
import MyModal from "../UI/modal/MyModal";
import postRequest from "../../../redux/requests";
import MyThxModal from "../UI/thxmodal/MyThxModal";
import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from '../UI/admininput/MyAdminInput';
import { useDispatch, useSelector } from "react-redux";
import { useFetchingPost, usePing } from "../../hooks/useAdminChangeing";


import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from "../../hooks/useChangeStateFirst";
import { checkInternetConnect } from "../../untils/checkInternetConnect"

const MainApplication = ()=>{
    const [modalInfo, setModalInfo] = useState({namePerson: '', tel: ''})
    const isAdmin = useSelector(state=>state.AdminKey)
    const dispatch = useDispatch()
    const [complitedChange,setComplitedChange] = useState(false)
    const adminTexts = useSelector(state=>state.AdminTexts)


    const [premissionGet, setPremissionGet] = useState(0) 
    const changeState = useChangeStateFirst(setPremissionGet, premissionGet, "mainApplication", 'AT', adminTexts.mainApplication) 

    const {isInternet} = useSelector(state=>state.InternetKey)
    useEffect(()=>{
        const statusConnect = checkInternetConnect(dispatch)
    },[isInternet])



  
    const addModalInfo = (e)=>{
        e.preventDefault();
        setModal(true); 
        useFetchingPost({...modalInfo}, 'modalOrder', `${new Date()}`);
        setModalInfo({namePerson:'',tel:''})
        // postRequest(forServerInfo)

    }



    const [adminInfo, setAdminInfo] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, subdescr: {width:0,height:0}})

    const [modal, setModal] = useState(false)
    return (
        <section className={cl.application}>
           
            <div className={cl.applicationLeftBg}></div>



            
                 <div className="container">
           
                 <div className={cl.applicationContent}>
                     
                         <div className={cl.applicationLeftBlock}>
                             <span className={cl.applicationFemaleBg}>
 
                             </span>
                         </div>
                     
                     
                     <div className={cl.applicationRightBlock}>
                         <div className={cl.applicationRightContent}>
                             
                                 <form action="" id='application'>
                                    {isAdmin && premissionGet === '200' ? 
                                        <MyAdminInput width={adminInfo.title.width}  fetchInfo={{item: adminTexts.mainApplication,id: "mainApplication", category: 'adminTexts'}} height={adminInfo.title.height} typeAction={'TITLE_APPLICATION_INFO'}>
                                            <h2 className={cl.applicationRightTitle} onClick={e=>setAdminInfo({...adminInfo, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainApplication.title}</h2>
                                        </MyAdminInput>
                                    :
                                        <h2 className={cl.applicationRightTitle}>Оставить заявку</h2>
                                    }
                                    {isAdmin&& premissionGet === '200' ? 
                                        <MyAdminInput width={adminInfo.descr.width} fetchInfo={{item: adminTexts.mainApplication,id: "mainApplication", category: 'adminTexts'}} height={adminInfo.descr.height} typeAction={'DESCR_APPLICATION_INFO'}>
                                            <p className={cl.applicationRightDescr}  onClick={e=>setAdminInfo({...adminInfo, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainApplication.descr}</p>  
                                        </MyAdminInput>
                                    :
                                        <p className={cl.applicationRightDescr}>Заполните форму и наш менеджер свяжется с вами в течение дня, чтобы обсудить вашу задачу</p>
                                    }
                                     <div className={cl.applicationInputBlock}>
                                         <MyInput required place='Ваше имя' classesInput={cl.applicationInput} valueInput={modalInfo.namePerson} setInput={setModalInfo} input={modalInfo} classesPlace={cl.applicationPlace}/>
                                         <MyMask classesItem={cl.applicationMask} classesPlace={cl.applicationPlaceM} value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})}/>
                                     </div>
                                     {isAdmin && premissionGet === '200' ? 
                                        <MyAdminInput width={adminInfo.subdescr.width} fetchInfo={{item: adminTexts.mainApplication,id: "mainApplication", category: 'adminTexts'}} height={adminInfo.subdescr.height} typeAction={'SUBDESCR_APPLICATION_INFO'}>
                                            <p className={cl.applicationBottomDescr} onClick={e=>setAdminInfo({...adminInfo, subdescr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{adminTexts.mainApplication.subdescr}</p>
                                        </MyAdminInput>
                                    :
                                        <p className={cl.applicationBottomDescr}>Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных</p>
                                    }
                                     <MyBtnBlank classes={cl.applicationBtn} type='submit' form='application' onClick={(e)=>{isInternet?addModalInfo(e):alert('У вас отсутствует соединение с интернетом')}}>ОТПРАВИТЬ</MyBtnBlank>
                                     <MyBtnBlank classes={cl.applicationBtnM}  type='submit' form='application' onClick={(e)=>{isInternet?addModalInfo(e):alert('У вас отсутствует соединение с интернетом')}}>ОСТАВИТЬ ЗАЯВКУ</MyBtnBlank>
                                 </form>
                            
                         </div>
                     </div>
                 </div>
                  
             </div>
           
           
            <div className={cl.applicationRightBg}></div>
            <MyThxModal visible={modal} setVisible={setModal}/>
        </section>
    )
}

export default MainApplication