import React from 'react';
import cl from '../../style/TariffList.module.css';
import MyTitle from '../UI/titlepage/MyTitle'

import MainTariffContainer from '../mainP/MainTariff';
import { useSelector } from 'react-redux';
const TariffList = () => {
    const adminTexts = useSelector(state=>state.AdminTexts)
    return (
        <section className={cl.tariff}>
            <span className={cl.tariffBackground}></span>
            <div className="container">
               <MyTitle title={adminTexts.tariffPageTexts.title} fetchInfo={{item: adminTexts.tariffPageTexts,id:"tariffPageTexts", category: 'adminTexts'}} typeAction={'TITLE_TARIFF_PAGE_INFO'} classes={cl.titlePage}/>
            </div>
                <MainTariffContainer/>
        </section>
    )
}

export default TariffList