import React, {useState} from 'react';
import HeroSection from './HeroSection';
import cl from '../style/MobileHero.module.css';
import {connect} from "react-redux/lib";
import { useSelector,useDispatch } from 'react-redux';
import { useChangeStateFirst } from '../hooks/useChangeStateFirst';


const MobileHero =  ({column, actionTitle, actionDescr})  => {
    const {MobileHeroPage} = useSelector(state=>state)
    const dispatch = useDispatch()
    const state = MobileHeroPage[column]

    const [premissionState, setPremissionState] = useState(0) 
    const changeState = useChangeStateFirst( setPremissionState,premissionState, "-","/mobileHero",MobileHeroPage, 'CHANGE_STATE_HEROS_PAGES') 



    return (
        <section className={cl.mobileSection}>
           <HeroSection title={state.title}  columnName={column} stateColumn={state}  premissionState={changeState} actionTitle={actionTitle} actionDescr={actionDescr}  descr={state.descr} classesImg={state.classesimg} gridCl={state.grid}/>
        </section>
    )
}

export default MobileHero