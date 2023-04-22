import React, { useEffect, useMemo, useRef, useState } from 'react';
import cl from '../../style/MainQuiz.module.css';
import MyViewElement from '../UI/viewelement/MyViewElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import { useDispatch, useSelector } from 'react-redux';
import MyAddElement from '../UI/adminaddel/MyAddElement';
import { getStartedInfo } from '../../untils/getStartedInfo';
import MainQuizItem from './MainQuizItem';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';
import MyThxModal from '../UI/thxmodal/MyThxModal';
import { useFetchingPost } from '../../hooks/useAdminChangeing';
const MainQuiz = ()=>{
    const adminTexts = useSelector(state=>state.AdminTexts)
    const dispatch = useDispatch()
    const quizState = useSelector(state=>state.MainQuiz)
    const [modal, setModal] = useState(false)
    const [quizChangeInfo, setQuizChangeInfo] = useState({title: {width:0,height: 0}, descr: {width:0,height:0}}) 
    const titleQuiz = useRef('')
    const descrQuiz = useRef('')
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const [resultPrice, setResultPrice] = useState(0)
    const [modalInfo,setModalInfo] = useState({tel:'',namePerson:''})
    const sendOrder = ()=>{
        setModalInfo({...modalInfo, tel:'',namePerson:''})
        const objRes = {}
        quizState.map((e,i,arr)=>{
            let titleItem = e.id!==arr.length ? e.title : e.lastTitle
            let activeItem = e.list!==null&&e.list!=='lastPage'?e.list.filter(el=>el.activeItem)[0].subtitle:e.list==null?{'oldSite':e.oldSite,'oldSiteUrl':e.oldSiteUrl}:resultPrice
            objRes[titleItem]=activeItem
        })
       dispatch({type:'RESET_ACTIVE_QUIZ',info:{}})
        useFetchingPost({...objRes, ...modalInfo}, 'modalOrder', 'MainQuiz')  

    }
    let arrElementLine = quizState.filter(e=>e.id<5).map((e,i,arr)=>i+1==arr.length?[e]:[e,'-'])
    const stepArr = []
    arrElementLine.map((e,i,arr)=>{e[1]!==undefined?stepArr.push(e[0],e[1]):stepArr.push(e[0])})
 

   let arrItemActive = []
   arrItemActive.length = quizState.length
   arrItemActive.fill(false)
   arrItemActive[0] = true


   const [activeItemState, setActiveItemState] = useState(arrItemActive)

   const changeActivePage = (activeId)=>{
    setActiveItemState(activeItemState.map((e,i)=>i==activeId-1?true:false))

   }

   useMemo(()=>{
    if(activeItemState[activeItemState.length-1]){
        console.log(quizState.filter((e,i,arr)=>e.list!==null&&e.list!=='lastPage').map((e,i,arr)=>e.list.filter(el=>el.activeItem)).reduce((ac,el)=>el[0].price+ac,0))
        setResultPrice(quizState.filter((e,i,arr)=>e.list!==null&&e.list!=='lastPage').map((e,i,arr)=>e.list.filter(el=>el.activeItem)).reduce((ac,el)=>el[0].price+ac,0))
    }
   },[activeItemState[activeItemState.length-1]])

    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-","/mainQuiz",quizState, 'MAIN_QUIZ_CHANGE_STATE') 
    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'mainQuiz', 'AT',adminTexts.mainQuiz)

    return (
        <section className={cl.quizSection}>
           
            <div className={["container", cl.cont].join` `} >
               
                <div className={cl.quizSectionBlock} >
                    <MyViewElement element={
                        <div className={cl.quizHeading}>
                            {isAdmin && premissionGet === '200' ? 
                                <MyAdminInput typeAction={'TITLE_QUIZ_INFO'} fetchInfo={{item: adminTexts.mainQuiz, id: "mainQuiz", category: 'adminTexts'}} width={quizChangeInfo.title.width} height={quizChangeInfo.title.height}>
                                    <h2   className={cl.quizTitle} onClick={e=> setQuizChangeInfo({...quizChangeInfo, title: {width:titleQuiz.current.offsetWidth,height:titleQuiz.current.offsetHeight}}) }>{adminTexts.mainQuiz.title}</h2>
                                </MyAdminInput> 
                            :
                                <h2   className={cl.quizTitle} >{adminTexts.mainQuiz.title}</h2>
                            
                            }
                            {isAdmin && premissionGet === '200' ? 
                                <MyAdminInput typeAction={'DESCR_QUIZ_INFO'} fetchInfo={{item: adminTexts.mainQuiz, id: "mainQuiz", category: 'adminTexts'}} width={quizChangeInfo.descr.width} height={quizChangeInfo.descr.height}>
                                    <p  className={cl.quizDescr} onClick={e=> setQuizChangeInfo({...quizChangeInfo, descr: {width:descrQuiz.current.offsetWidth,height:descrQuiz.current.offsetHeight}}) }>{adminTexts.mainQuiz.descr}</p>
                                </MyAdminInput>
                            :
                                <p  className={cl.quizDescr} >{adminTexts.mainQuiz.descr}</p>
                            }
                        </div>
                    }/>
                    <MyViewElement element={
                        <div className={cl.quizPagination}>
                        {activeItemState[activeItemState.length-1]?
                        ''
                        :
                        <ul className={cl.quizPLisy}>
                            {stepArr.map((e)=>  
                                e==='-'?
                                <li className={cl.quizLineItem}>
                                    <div className={cl.quizLine}></div>
                                </li>
                                :
                                <li className={cl.quizPItem}>
                                    <div className={cl.quizPBlock} >
                                        <div className={activeItemState[e.id-1]?[cl.quizPCountBlock,cl.quizActiveP].join` `:cl.quizPCountBlock} >
                                            <span className={cl.quizPCount} >{e.id}</span>
                                        </div>
                                        <div className={cl.quizStepBlock}>
                                            <p className={cl.quizStep}>ШАГ {e.id}</p>
                                        </div>
                                    </div>
                                </li>
                            )}
                            
                        </ul>
                        }
                        
                    </div>
                    }/>

                    <div>
                        {quizState.map((e,i,arr)=>
                        <MyViewElement element={
                            <MainQuizItem setModalInfo={setModalInfo}changeActivePage={changeActivePage}  permitActive={activeItemState[e.id-1]} modalInfo={modalInfo} sendOrder={sendOrder} setModal={setModal} resultPrice={resultPrice} premissionLists={premissionLists} lastId={arr.length} infoObj={e} id={e.id}></MainQuizItem>
                        }/>
                        )}
                    </div>

              
            </div>
            </div>
                <MyThxModal visible={modal} setVisible={setModal}/> 
        </section>
    )
}

export default MainQuiz