import React from 'react';
import MyTitle from '../UI/titlepage/MyTitle';
import cl from '../../style/VacancyAcc.module.css';
import VacancyAccAll from './VacancyAccAll';
import VacancyAccItem from './VacancyAccItem';
import { useSelector } from 'react-redux';
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';

const VacancyAcc = ()=>{
    const vacancyInfo = useSelector(state=>state.VacancyAccordion)
    const vacancyTexts = useSelector(state=>state.AdminTexts.vacancyTexts)
    const adminTexts = useSelector(state=>state.AdminTexts)
    
    return (
        <>
            <section className={cl.vacancySection}>
                <div className={["container", cl.container].join` `}>
                    <div className={cl.vacancyCont}>
                        <MyTitle title={vacancyTexts.title} fetchInfo={{item: adminTexts.vacancyTexts,id: "vacancyTexts", category: 'adminTexts'}} typeAction={'TITLE_VACANCY_PAGE_CHANGE'} classes={cl.title}/>
                        <VacancyAccAll itemList={vacancyInfo} fetchInfo={{state: vacancyInfo, url: 'Vacancy', actionState: 'ACC_VACANCY_CHANGE_STATE'}} actionTitle={'VACANCY_TITLE_CHANGE'} actionDescr={'VACANCY_DESCR_CHANGE'} actionQuestion={'VACANCY_QUESTION_CHANGE'} actionList={'VACANCY_LIST_CHANGE'} actionListAdd={'VACANCY_LIST_ADD_ELEMENT'} actionListDelete={'VACANCY_LIST_DELETE_ELEMENT'}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VacancyAcc