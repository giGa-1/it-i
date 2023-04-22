import React, {useState} from 'react';
import cl from '../../style/VacancyAcc.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";
import MyDeleteElement from '../UI/admindelel/MyDeleteElement';
import MyAdminInput from '../UI/admininput/MyAdminInput';
import MyAddElement from '../UI/adminaddel/MyAddElement';
const VacancyAccItem = ({title, descr, whatDo, info,premissionLists, check,element,urlAcc,classesDescr, handleChange, expanded, id, actionDescr = 'VACANCY_DESCR_CHANGE', actionTitle = 'VACANCY_TITLE_CHANGE', actionQuestion, actionList, actionListAdd, actionListDelete , actionDeleteMain = 'VACANCY_DELETE_ELEMENT'})=>{
  const [isActive, setIsActive] = useState(false)
  const {isAdmin} = useSelector(state=>state.AdminKey)
 
  const [vacancyData, setVacancyData] = useState({title: {width:0,height:0}, descr: {width:0,height:0}, question: {width:0,height:0}, listItem: {width:0,height:0}})
    return (
        <div className={cl.wrapItem}>
          {isAdmin?<MyDeleteElement typeAction={actionDeleteMain} id={id}></MyDeleteElement>:''}
          <Accordion expanded={isActive ? expanded === check : false} onClick={e=>setIsActive(true)} defaultExpanded={false} onChange={handleChange(check)} className={cl.Accordion}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className={cl.accSummary}>
          {isAdmin && premissionLists == '200' ?
          <MyAdminInput width={vacancyData.title.width} fetchInfo={{item: element, id: id, category: urlAcc}} id={id} height={vacancyData.title.height} typeAction={actionTitle}>
             <Typography className={cl.accordionTitle} onClick={e=>setVacancyData({...vacancyData, title: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>
            {title} 
            </Typography> 
          </MyAdminInput>
          :
            <Typography className={cl.accordionTitle}>
            {title} 
            </Typography>          
          }
        
            <div className={'accordionSignBlock'}>
                <span className={'accordionLineV'}/>
                <span className={'accordionLineH'}/>
            </div>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>
            <div className={cl.accordionCard}>
            {isAdmin && premissionLists == '200' ?
          <MyAdminInput width={vacancyData.descr.width}  fetchInfo={{item: element, id: id, category: urlAcc}} id={id} height={vacancyData.descr.height} typeAction={actionDescr}>
            <p className={[cl.accordionDescr, classesDescr].join` `} onClick={e=>setVacancyData({...vacancyData, descr: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{descr}</p>
          </MyAdminInput>
          :
          <p className={[cl.accordionDescr, classesDescr].join` `}>{descr}</p>     
          }
              
                    {whatDo !== undefined && 
                      isAdmin && premissionLists == '200' ? 
                      <MyAdminInput width={vacancyData.question.width}  fetchInfo={{item: element, id: id, category: urlAcc}} id={id} height={vacancyData.question.height} typeAction={'VACANCY_QUESTION_CHANGE'}>
                      <div className={cl.accordionWhatDo} onClick={e=>setVacancyData({...vacancyData, question: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{whatDo}</div>
                      </MyAdminInput>
                      :
                      <div className={cl.accordionWhatDo}>{whatDo}</div>
                    }
                    {info !== undefined && 
                    <ul className={cl.accordionList}>
                      {isAdmin &&<MyAddElement typeAction={'VACANCY_LIST_ADD_ELEMENT'} id={id}/>}
                        {info.map(e => 
                        <li className={cl.accordionItem}>
                            {isAdmin &&<MyDeleteElement typeAction={'VACANCY_LIST_DELETE_ELEMENT'} id={id} count={e.id}/>}
                            <span className={cl.point}></span>
                            {isAdmin && premissionLists == '200' ?
                            <MyAdminInput width={vacancyData.listItem.width}  fetchInfo={{item: element, id: id, category: urlAcc}} id={id} count={e.id} height={vacancyData.listItem.height} typeAction={'VACANCY_LIST_CHANGE'}>
                              <span className={cl.textItem} onClick={e=>setVacancyData({...vacancyData, listItem: {width:e.target.offsetWidth, height: e.target.offsetHeight}})}>{e.text}</span>
                            </MyAdminInput>
                            :
                            <span className={cl.textItem}>{e.text}</span>
                            }
                            
                        </li>
                        )}
                    </ul>
                    }
            </div>
          </Typography>
          </AccordionDetails>
      </Accordion>
        </div>
          
    )
}

export default VacancyAccItem


