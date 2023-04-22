import React from "react";
import TariffSeoContainer from "../TariffSEO/TariffSEO";
import cl from '../../style/SeoTariff.module.css';

const TariffSeoDuo = ()=>{
    return (
        <section className={cl.seoSection}>
            <TariffSeoContainer column={'firstColumn'}/>
            <TariffSeoContainer column={'secondColumn'}/>
        </section>
    )
}

export default TariffSeoDuo