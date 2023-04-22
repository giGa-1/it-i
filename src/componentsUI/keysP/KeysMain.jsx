import React, {useState, useMemo} from "react";
import cl from '../../style/KeysMain.module.css';
import MyTitle from "../UI/titlepage/MyTitle";
import KeysMainCard from "./KeysMainCard";
import MyNavPages from '../UI/navpage/MyNavPages';
import MyAdminModal from '../UI/adminmodal/MyAdminModal';
import { useSelector } from "react-redux";

const KeysMain = ()=>{
    const [navInfoArr, setNavInfoArr] = useState(['Кейсы']);
    const [modalInfo, setModalInfo] = useState({href:'',color:'', alt:'', id: ''})
    const isAdmin = useSelector(state=>state.AdminKey.isAdmin)
  
    const [modal, setModal] = useState({sites: false, crm: false, mobile: false, graph: false})
    const adminTexts = useSelector(state=>state.AdminTexts)
    return (
        <section className={cl.keysMain}>
            <div className={["container", cl.cont].join` `}>
                <div className={cl.keysCont}>
                    <MyTitle title={adminTexts.keysTexts.title} classes={cl.keysTitle}  fetchInfo={{item: adminTexts,id: "keysTexts", category: 'adminTexts'}}  typeAction={'TITLE_KEYS_PAGE_CHANGE'}/>
                    <KeysMainCard setNavInfo={setNavInfoArr} setModalInfo={setModalInfo} modalInfo={modalInfo} setModal={setModal} modal={modal} />
                </div>               
            </div>
            {isAdmin ?<MyAdminModal keysIdintificator={true} visible={modal.sites} setVisible={setModal} colorValue={modalInfo.color} hrefValue={modalInfo.href} altValue={modalInfo.alt} logoValue={1} imgValue={1} id={modalInfo.id}  actionHref={'HREF_SITES_CHANGE'} actionImg={'IMG_SITES_CHANGE'} actionAlt={'ALT_SITES_CHANGE'} actionLogo={'LOGO_SITES_CHANGE'} actionColor={'BACKGROUND_SITES_CHANGE'}></MyAdminModal>:''}
            {isAdmin ?<MyAdminModal keysIdintificator={true} visible={modal.crm} setVisible={setModal} colorValue={modalInfo.color} hrefValue={modalInfo.href} altValue={modalInfo.alt} logoValue={1} imgValue={1} id={modalInfo.id}  actionHref={'HREF_CRM_KEYS_CHANGE'} actionImg={'IMG_CRM_KEYS_CHANGE'} actionAlt={'ALT_CRM_KEYS_CHANGE'} actionLogo={'LOGO_CRM_KEYS_CHANGE'} actionColor={'BACKGROUND_CRM_KEYS_CHANGE'}></MyAdminModal>:''}
            {isAdmin ?<MyAdminModal keysIdintificator={true} visible={modal.mobile} setVisible={setModal} colorValue={modalInfo.color} hrefValue={modalInfo.href} altValue={modalInfo.alt} logoValue={1} imgValue={1} id={modalInfo.id}  actionHref={'HREF_MOBILE_CHANGE'} actionImg={'IMG_MOBILE_CHANGE'} actionAlt={'ALT_MOBILE_CHANGE'} actionLogo={'LOGO_MOBILE_CHANGE'} actionColor={'BACKGROUND_MOBILE_CHANGE'}></MyAdminModal>:''}

        </section>
    )
}

export default KeysMain