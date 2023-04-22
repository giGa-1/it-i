import React from 'react';
import TariffSeoContainer from "../TariffSEO/TariffSEO";
import cl from '../../style/SeoTariff.module.css';

const SeoTariff = ()=>{
    return (
        <section className=''>
            <div className="container">
                <TariffSeoContainer column={'firstColumn'}/>
                <TariffSeoContainer column={'secondColumn'}/>
            </div>
        </section>
    )
}

export default SeoTariff