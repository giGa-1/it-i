import React from "react";
import cl from '../../style/MainQuiz.module.css';

import MainQItem from './MainQuizElement';
import MyModal from '../UI/modal/MyModal';
import MyMask from '../UI/maskinput/MyMask';
import MyInput from '../UI/input/MyInput';
import MyBtnBlank from '../UI/buttonborder/MyBtnBlank';
import MyBtnFiled from '../UI/buttonback/MyBtnFiled';
import MyThxModal from '../UI/thxmodal/MyThxModal';
import { useState,useEffect } from "react";
import { checkInternetConnect } from "../../untils/checkInternetConnect";

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyAdminInput from '../UI/admininput/MyAdminInput';


const MainQuizItem = ({id,infoObj,changeActivePage,lastId,permitActive,premissionLists,resultPrice,setModal,setModalInfo,modalInfo,sendOrder})=>{
    const dispatch = useDispatch()
    const [checkInputSite,setCheckInputSite] = useState('')
    const [activeNextBtn,setActiveNextBtn] = useState(false)
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
  
    useMemo(()=>{
      
        if(infoObj.list !== null&&infoObj.list !== 'lastPage'){
            setActiveNextBtn(infoObj.list.some(e=>e.activeItem))
        }else if(infoObj.list == null){
            setActiveNextBtn(infoObj.oldSite||infoObj.oldSiteUrl)
        }
    },[infoObj])
   
    useMemo(()=>{
        checkInputSite&&dispatch({type: 'CHANGE_OLD_SITE_URL_QUIZ', info: {text:checkInputSite,id:id}})
    },[checkInputSite])

   
    const {isInternet} = useSelector(state=>state.InternetKey)
    useEffect(()=>{
        const statusConnect = checkInternetConnect(dispatch)
    },[isInternet])



   

    const [quizInfo, setQuizInfo] = useState({lastTitle: {width:0,height:0},title:{width:0,height:0}, lastDescr: {width:0,height:0}, lastHelper: {width:0,height:0}})
    

    
    return (
        <>
          <div  className={permitActive ? [cl.quizTabsActive,cl.quizTabs].join` ` :cl.quizTabs} >
                    {isAdmin&&premissionLists=='200'?
                    <MyAdminInput width={quizInfo.title.width} id={id} height={quizInfo.title.height} typeAction={'CHANGE_TITLE_QUIZ'}>
                        <h3 className={cl.quizSectionTitle} onClick={e=>setQuizInfo({...quizInfo, title: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}>{infoObj.title}</h3>

                    </MyAdminInput>  
                    :
                    <h3 className={cl.quizSectionTitle}>{infoObj.title}</h3>
                    }
                   
                    {infoObj.list !== null && infoObj.list !== 'lastPage' ? 
                      <ul className={infoObj.list.length == 2 ? cl.quizSectionListTwo : cl.quizSectionListFour }>
                        {infoObj.list.map((e,i,arr) => {
                            return (<MainQItem isAdmin={isAdmin} premissionLists={premissionLists} subtitle={e.subtitle } check={e.activeItem} id={id} count={e.id} price={e.price} element={e}/>)
                        })}
                    </ul>
                    : infoObj.list === null ?
                    <div className={cl.quizSectionIBlock}>
                        <MyInput classesInput={cl.inputItem} classesPlace={cl.modalPlace} setCheckInputSite={setCheckInputSite}  type="email"  place='Оставьте ссылку на ваш сайт'/>
                        <div className={infoObj.oldSite ? [cl.quizCheckBlock,cl.quizCheckBoxActive].join` ` :cl.quizCheckBlock} onClick={e=> dispatch({type: 'CHANGE_OLD_SITE_QUIZ', info: {text:!infoObj.oldSite,id:id}})}>
                            <div className={cl.quizCheckBlock} >
                                <span className={cl.quizCheckBox}>
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.78256 7.83997L0.635742 4.69315L2.0351 3.29379L3.78256 5.0462L8.67684 0.146973L10.0762 1.54633L3.78256 7.83997Z" fill="#F84263"/>
                                    </svg>
                                </span>
                            </div>
                            <span className={cl.quizCheckboxText}>{infoObj.oldSiteText}</span>
                        </div>
                    </div>
                    :
                        <div className={[cl.resultSectionActive,cl.resultSection].join` `} >
                            <div className='container'>
                                <form id='quiz' action="">
                                    {isAdmin&&premissionLists=='200'?
                                        <MyAdminInput width={quizInfo.lastTitle.width} id={id} height={quizInfo.lastTitle.height} typeAction={'CHANGE_LAST_TITLE_QUIZ'}>
                                            <h3 className={cl.resultTitle} onClick={e=>setQuizInfo({...quizInfo, lastTitle: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}>{infoObj.lastTitle}</h3>
                                        </MyAdminInput>  
                                    :
                                        <h3 className={cl.resultTitle}>
                                            {infoObj.lastTitle}
                                        </h3>
                                    }
                                    
                                    <p className={cl.resultCountBlock}>
                                        <span className={cl.resultCount}>{resultPrice}</span> руб.
                                    </p>
                                    {isAdmin&&premissionLists=='200'?
                                        <MyAdminInput width={quizInfo.lastDescr.width} id={id} height={quizInfo.lastDescr.height} typeAction={'CHANGE_LAST_DESCR_QUIZ'}>
                                            <p className={cl.resultDescr} onClick={e=>setQuizInfo({...quizInfo, lastDescr: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}>{infoObj.lastDescr}</p>
                                        </MyAdminInput>
                                    :
                                        <p className={cl.resultDescr}>{infoObj.lastDescr}</p>
                                    }
                                    
                                    <div className={cl.resultInputBlock}>
                                        <MyInput setInput={setModalInfo} input={modalInfo} valueInput={modalInfo.namePerson} required place='Введите ваше имя' classesInput={cl.input} classesPlace={cl.place}/>
                                        <MyMask value={modalInfo.tel} onChange={e => setModalInfo({...modalInfo, tel: e.target.value})} classesItem={cl.maskQuiz}></MyMask>
                                    </div>
                                    {isAdmin&&premissionLists=='200'?
                                        <MyAdminInput width={quizInfo.lastHelper.width} id={id} height={quizInfo.lastHelper.height} typeAction={'CHANGE_LAST_HELPER_QUIZ'}>
                                           <span className={cl.resultHelper}  onClick={e=>setQuizInfo({...quizInfo, lastHelper: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}>{infoObj.lastHelper}</span>
                                        </MyAdminInput>
                                    :
                                    <span className={cl.resultHelper}>{infoObj.lastHelper}</span>
                                    }
                                    <div className={cl.resultBtnBlock}>
                                        <MyBtnBlank type='submit' form='quiz' classes={cl.resultButton} onClick={(e)=>{if(isInternet){e.preventDefault();setModal(true);sendOrder();changeActivePage(1)}else{alert('У вас отсутствует соединение с интернетом')}}} >Обсудить детали проекта</MyBtnBlank>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                    
                  
                
                    <div className={cl.quizBtnBlock}>
                        {infoObj.id !== 1&&id !== lastId?<button className={cl.quizSectionBtnBack} onClick={e=>changeActivePage(id-1)}>Назад</button>:''}
                        {id !== lastId ? <MyBtnBlank classes={activeNextBtn ? [cl.quizSectionBtnActive, cl.quizSectionBtnNext].join` `:cl.quizSectionBtnNext}  onClick={e=>changeActivePage(id+1)}>Далее</MyBtnBlank>:''}
                    </div>
                    
               
            </div>
        </>
    )
}

export default MainQuizItem