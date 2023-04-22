import React, { useMemo, useRef, useEffect, useState } from "react";
import cl from '../../style/MainQuiz.module.css';
import { useDispatch,useSelector } from "react-redux";
import MyAdminInput from '../UI/admininput/MyAdminInput';

const MainQItem = ({name,subtitle,check,id,count,premissionLists,isAdmin})=>{
        
    const dispatch = useDispatch()
   
    const [quizInfo, setQuizInfo] = useState({subTitle:''})
    
    return (
        <li  className={check&&isAdmin? [cl.quizSectionItemActive,cl.quizSectionAllActive,cl.quizSectionItem].join` ` :check?[cl.quizSectionItemActive,cl.quizSectionItem].join` `: cl.quizSectionItem} onClick={e=>dispatch({type:'CHANGE_ACTIVE_ITEM_QUIZ',info:{id:id,count:count,text:!check}})}>
            <div className={cl.quizContentCard} style={isAdmin?{'pointerEvents':'all'} :{'pointerEvents':'none'}}>
                <div className={cl.quizPointBlock}>
                    <input type="radio"   checked={check} onChange={e=>{e.target.checked = check}} className={cl.quizRadio}/>
                    <div className={cl.radioHelper}></div>
                </div>
                {isAdmin&&premissionLists=='200'?
                    <MyAdminInput width={quizInfo.subTitle.width} id={id} count={count} height={quizInfo.subTitle.height} typeAction={'CHANGE_TEXT_ITEM_QUIZ'}>
                        <p className={cl.quizSectionText}  onClick={e=>{e.preventDefault();setQuizInfo({...quizInfo, subTitle: {width:e.target.offsetWidth, height:e.target.offsetHeight}})}}>{subtitle}</p>
                    </MyAdminInput>  
                :
                    <p className={cl.quizSectionText}>{subtitle}</p>
                }
                
            </div>
        </li>
    )
}

export default MainQItem