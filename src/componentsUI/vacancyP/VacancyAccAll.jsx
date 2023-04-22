import React, { useRef, useEffect,useState } from "react";
import cl from '../../style/VacancyAcc.module.css';
import MyAddElement from "../UI/adminaddel/MyAddElement";
import { useChangeStateFirst } from '../../hooks/useChangeStateFirst';
import { useSelector } from "react-redux";
import VacancyAccItem from "./VacancyAccItem";



const VacancyAccAll = ({itemList, actionTitle,fetchInfo, actionDescr, actionQuestion, actionList, actionListAdd, actionListDelete, actionAddMain = 'VACANCY_ADD_ELEMENT', actionDeleteMain})=>{
   
    const [expanded, setExpanded] = React.useState('panel1');
    const {isAdmin} = useSelector(state=>state.AdminKey)

    const [premissionLists, setPremissionLists] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionLists,premissionLists, "-",'/'+fetchInfo.url,fetchInfo.state, fetchInfo.actionState) 

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  
    return (
        <>
             <div className={cl.listAcc}>
             {isAdmin?<MyAddElement typeAction={actionAddMain}/>:''}
                {itemList.map((e,i)=><VacancyAccItem urlAcc={fetchInfo.url} element={e} premissionLists={premissionLists} setPremissionLists={setPremissionLists} actionTitle={actionTitle} actionDescr={actionDescr} actionQuestion={actionQuestion} actionList={actionList} actionDeleteMain={actionDeleteMain} actionListAdd={actionListAdd} actionListDelete={actionListDelete} key={i} id={e.id} handleChange={handleChange} expanded={expanded} title={e.title} descr={e.descr} whatDo={e.whatdo} info={e.list} check={'panel' + (i + 1)}/>)}
            </div>
        </>
       
    )
}

export default VacancyAccAll