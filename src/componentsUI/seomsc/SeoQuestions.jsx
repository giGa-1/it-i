import React, {useState, useEffect, useMemo} from "react";

import VacancyAccAll from "../vacancyP/VacancyAccAll";
import cl from '../../style/SeoQuestion.module.css';
import { useSelector } from "react-redux";
import MyViewElement from "../UI/viewelement/MyViewElement";
import MyAdminInput from "../UI/admininput/MyAdminInput";
import { useDispatch } from "react-redux";
import { getStartedInfo } from "../../untils/getStartedInfo";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const SeoQuestions = ()=>{
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
    const seoTexts = useSelector(state=>state.AdminTexts.seoQuestion)
    const [questionData, setQuestionData] = useState({title: {width:0,height:0}})
    const infoArr = useSelector(state=>state.SeoAcc)
    const dispatch = useDispatch()
    const adminTexts = useSelector(state=>state.AdminTexts)

    const [premissionGet, setPremissionGet] = useState(0) 
    const changeStateTexts = useChangeStateFirst(setPremissionGet, premissionGet, 'seoQuestion', 'AT',seoTexts)

  

    return (
        <section className={cl.questSection}>
            <div className="container">
            <MyViewElement element={
                    isAdmin  && premissionGet === '200' ? 
                    <MyAdminInput width={questionData.title.width} fetchInfo={{item: seoTexts,id: "seoQuestion", category: 'adminTexts'}} height={questionData.title.height} typeAction={'TITLE_SEO_QUESTION_INFO'}>
                        <h2 className={cl.questTitle} onClick={e=>setQuestionData({...questionData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{seoTexts.title}</h2>
                    </MyAdminInput>
                    :
                    <h2 className={cl.questTitle}>{seoTexts.title}</h2>
                }/>
               
                <VacancyAccAll itemList={infoArr} fetchInfo={{state: infoArr, url: 'SeoAcc', actionState: 'SEO_ACC_CHANGE_STATE'}} classesItem={cl.accItem} classesDescr={cl.accordionDescr} classesBlock={cl.accBlock} actionTitle={'TITLE_SEO_ACC_CHANGE'} actionDescr={'DESCR_SEO_ACC_CHANGE'} actionAddMain={'ADD_SEO_ACC_ELEMENT'} actionDeleteMain={'DELETE_SEO_ACC_ELEMENT'}/>
            </div>
        </section>
    )
}

export default SeoQuestions