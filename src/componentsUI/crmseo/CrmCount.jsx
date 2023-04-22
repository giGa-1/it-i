import React from "react";
import TariffSeoContainer from "../TariffSEO/TariffSEO";
import cl from '../../style/CrmCount.module.css';

const CrmCount = ()=>{
    return (
        <section className={cl.countSection}>
            <TariffSeoContainer column={'CRMSystem'}/>
        </section>
           
    )
}

export default CrmCount