import React, { useEffect, useRef } from "react";
import MobileHeroContainer from "../src/componentsUI/MobileHero";
import MobilePortfolio from "../src/componentsUI/mobilemsc/MobilePortfolio";
import MainApplication from "../src/componentsUI/mainP/MainApplication";
import MobileServiceContainer from "../src/componentsUI/mobilemsc/MobileService";
import MainSimple from '../src/componentsUI/mainP/MainSimple'
import MainReview from "../src/componentsUI/mainP/MainReview";
import MainQuestion from '../src/componentsUI/mainP/MainQuestion'
import MainLider from "../src/componentsUI/mainP/MainLider";
import MainOfferContainer from "../src/componentsUI/mainP/MainOffer";
import TariffSeoContainer from "../src/componentsUI/TariffSEO/TariffSEO";
import MainDevContainer from "../src/componentsUI/mainP/MainDev";
import cl from '../src/style/MobilePage.module.css'
import MobileCount from '../src/componentsUI/mobilemsc/MobileCount'
import Container from '../src/componentsUI/Container'
import { CheckAdminKey } from '../src/untils/checkAdminKey';

const MobilePage = ()=>{
    CheckAdminKey()

    const mobileI = useRef(false)
    useEffect(()=>{
        mobileI.current.classList.toggle('mobileI')
    },[mobileI])
    return (
        <>
            <Container>
                <main ref={mobileI} className="mobile">
                    <MobileHeroContainer column={'mobile'} actionDescr={'DESCR_HERO_MOBILE_PAGE_INFO'} actionTitle={'TITLE_HERO_MOBILE_PAGE_INFO'}/>
                    <MobileCount/>
                    <MobileServiceContainer column={'mobileDevelop'}  actionImg={'LIST_IMG_MOBILE_PAGE_CHANGE'}  actionTitle={'TITLE_MOBILE_PAGE_CHANGE'} actionDescr={'DESCR_MOBILE_PAGE_CHANGE'} actionListAdd={'LIST_ADD_MOBILE_PAGE_CHANGE'} actionListTitle={'LIST_TITLE_MOBILE_PAGE_CHANGE'} actionListDescr={'LIST_DESCR_MOBILE_PAGE_CHANGE'} actionListDelete={'LIST_DELETE_MOBILE_PAGE_CHANGE'}/>
                    <MobilePortfolio/>
                    <MainDevContainer column={'developerMobile'}/>
                    <MainApplication/>
                    <div className={cl.offer}>
                        <MainOfferContainer/>
                    </div>
                    <MainLider/>
                    <MainReview/>
                    <MainSimple/>
                    <MainQuestion/>
                </main>
            </Container>
        </>
    )
}

export default MobilePage