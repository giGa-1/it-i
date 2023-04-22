import React, {useMemo, useState} from "react";
import MyBtns from "../UI/btnsnav/MyBtns";
import cl from '../../style/KeysMain.module.css';
import { connect } from 'react-redux/lib/exports';
import { selectBtnKeys } from "../../../redux/keysNav-redux";
import KeysMainSites from "./KeysMainSites";
import KeysMainSeo from "./KeysMainSeo";
import KeysMainMobile from "./KeysMainMobile";
import KeysMainCrm from "./KeysMainCrm";
import { useSelector, useDispatch } from "react-redux";

const KeysMainCard = ({setModal, modal, setModalInfo, modalInfo})=>{
    let countPages = 4
    const {keysNavPage} = useSelector(state=>state)
    const dispatch = useDispatch()
    const infoData = keysNavPage.btns
    const [defaultActive] = infoData.filter((e,i)=>e.selected)
    const [tabActive, setTabActive] = useState(defaultActive.number)
    const [arrClasses, setArrClasses] = useState([{class: cl.active},{class: cl.disable},{class:cl.disable}, {class:cl.disable}])
    useMemo(()=>{
        (()=>{
            setArrClasses(arrClasses.fill({class: cl.disable}))
            let active = arrClasses.map((e,i)=>i==tabActive?{class: cl.active}:e)
            setArrClasses(active)
        })()
    },[tabActive])
    return (
        <div className={cl.keysNavBlock}>
            <nav className={cl.keysNav}>
                <MyBtns arrBtns={infoData} setTabActive={setTabActive} selectBtn={selectBtnKeys} btnsClasses={cl.keysNavList} btnClasses={cl.keysNavItem} itemSwipeClasses={cl.keysSwipeItem}/>
            </nav>
            <KeysMainSites setModal={setModal} modalInfo={modalInfo} setModalInfo={setModalInfo} modal={modal} classesTabs={arrClasses[0].class}/>
            <KeysMainSeo  classesTabs={arrClasses[1].class}/>
            <KeysMainMobile  setModal={setModal} modalInfo={modalInfo} setModalInfo={setModalInfo} modal={modal} classesTabs={arrClasses[2].class}/>
            <KeysMainCrm  setModal={setModal} modalInfo={modalInfo} setModalInfo={setModalInfo} modal={modal}  classesTabs={arrClasses[3].class}/>
        </div>
    )
}


export default KeysMainCard